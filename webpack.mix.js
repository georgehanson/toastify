let mix = require('laravel-mix');

mix.setPublicPath('dist');
mix.ts('src/index.ts', 'dist/build.js');
mix.ts('index.ts', 'dist/index.js');
mix.sass('src/scss/toastify.scss', 'dist/toastify.css');
