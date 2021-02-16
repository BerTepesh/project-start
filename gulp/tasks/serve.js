const paths 		= require('../paths'),
			gulp 			= require('gulp'),
			styles 		= require('./styles'),
			twig2html = require('./twig2html'),
			server 		= require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false, 
        open: true,
        cors: true
    })

    gulp.watch(paths.watch.styles, gulp.series(styles, cb => gulp.src('build/assets/stylesheet').pipe(server.stream()).on('end', cb)))
    gulp.watch(paths.watch.html, gulp.series(twig2html, readyReload))

    return cb()
}