module.exports = {
	build: {
		html: 		'./public',
		styles: 	'./public/assets/stylesheets/',
		scripts: 	'./public/assets/javascripts/',
		img: 			'./public/assets/images/',
		icons: 		'./public/assets/images/',
		fonts: 		'./public/assets//fonts/'
	},
	src: {
		html: 		'./src/html/*.twig',
		sass: 		'./src/stylesheets/*.scss',
		scripts: 	'./src/javascripts/',
		img: 			'./src/images/**/*.{gif,png,jpg,svg,webp}',
		icons: 		'./src/icons/**/*.svg',
		fonts: 		'./src/fonts/**/*.*'
	},
	watch: {
		html: 		'./src/html/**/*.twig',
		styles: 	'./src/stylesheets/**/*.scss',
		scripts: 	'./src/javascripts/**/*.js',
		img: 			'./src/images/**/*.*',
		icons: 		'./src/icons/**/*.*',
		fonts: 		'./src/fonts/**/*.*'
	},
};