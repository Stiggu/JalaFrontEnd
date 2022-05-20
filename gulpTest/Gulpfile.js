const { src, dest, series } = require("gulp");
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const sass = require('gulp-sass')(require('node-sass'))

function concatMinify(cb) {
    src('./src/*.js')
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(dest('./dist/js/'));
    cb();
}

function generateCSS(cb) {
    src('./src/sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(dest('./dist/css/'));
    cb();
}

exports.default = series(generateCSS,concatMinify);