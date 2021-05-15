const paths 				= require('../paths'),
      entries 			= require('../../src/javascripts/_entries'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber'),
			browserify  	= require('browserify'),
			source      	= require('vinyl-source-stream'),
      buffer      	= require('vinyl-buffer'),
      babelify   		= require('babelify');

module.exports = function scripts(done) {
  Object.entries(entries).forEach(entry => {
    const [key, value] = entry;

    let pathArr = value.map(el=> paths.src.scripts + el);
    
    browserify( pathArr, { debug: false })
    .transform(babelify.configure({
      presets: ["@babel/preset-env"], 
    }))
    .bundle()
    .pipe(source(key + '.js'))
    .pipe(buffer())
    .pipe(gulp.dest(paths.build.scripts))
  });
  done();
}

