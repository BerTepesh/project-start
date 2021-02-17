const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber')

module.exports = function scripts() {
	return gulp.src(paths.src.scripts)
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.scripts))
}