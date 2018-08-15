let mix = require('laravel-mix');


mix
	.setPublicPath('public/')
	.setResourceRoot('../')
	.js('src/js/app.js', 'public/js') // Toma lo que está en src/js/app.js, lo compila y el resultado quedará en la carpeta public/js/
	.sass('src/scss/app.scss', 'public/css')
	.copy('src/images', 'public/images')
	.browserSync({
    	proxy: 'localhost:8888'
	}); 

