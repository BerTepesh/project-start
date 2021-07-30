const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber'),
			htmlmin 			= require('gulp-html-minifier'),
			prettyHtml 		= require('gulp-pretty-html'),
			twig 					= require('gulp-twig');

module.exports = function twig2html(cb) {
	return gulp.src(paths.src.html)
		.pipe(plumber())
		.pipe(twig())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(prettyHtml())
		.pipe(gulp.dest(paths.build.html))
}