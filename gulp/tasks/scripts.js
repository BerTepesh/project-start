const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber'),
			browserify  	= require('browserify'),
			source      	= require('vinyl-source-stream'),
      buffer      	= require('vinyl-buffer'),
      babelify   		= require('babelify');

module.exports = function scripts() {
	return browserify(paths.src.scripts, { debug: true })
		.transform(babelify.configure({
      presets: ["@babel/preset-env"]
    }))
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest(paths.build.scripts))
}