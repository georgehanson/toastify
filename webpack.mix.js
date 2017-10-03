let mix = require('laravel-mix');

mix.setPublicPath('dist');
mix.ts('src/index.ts', 'dist/build.js');
