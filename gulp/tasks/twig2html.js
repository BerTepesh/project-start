const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber'),
			twig 					= require('gulp-twig')

module.exports = function twig2html(cb) {
	return gulp.src(paths.src.html)
		.pipe(plumber())
		.pipe(twig())
		.pipe(gulp.dest(paths.build.html))
}