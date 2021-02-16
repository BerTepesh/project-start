module.exports = {
	build: {
		html: 		'./build',
		styles: 	'./build/assets/stylesheets/',
		// js: 			'/js/',
		// img: 			'/img/',
		// sprites: 	'/sprites/',
		// fonts: 		'/fonts/'
	},
	src: {
		html: 		'src/html/*.twig',
		sass: 		'src/stylesheets/*.scss',
		// 'js': 			'src/js/*.js',
		// 'css': 			'src/style/*.css',
		// 'img': 			'src/img/**/*.*',
		// 'sprites': 	'src/sprites/**/*.*',
		// 'fonts': 		'src/fonts/**/*.*'
	},
	watch: {
		html: 		'src/html/**/*.twig',
		styles: 	'src/stylesheet/**/*.scss',
		// 'js': 			'src/js/**/*.js',
		// 'img': 			'src/img/**/*.*',
		// 'sprites': 	'src/sprites/**/*.*',
		// 'fonts': 		'src/fonts/**/*.*'
	},
};