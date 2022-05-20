const {src, dest, series} = require("gulp");
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('node-sass'))
const del = require('del')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function concatMinify(cb) {
    src('./src/*.js')
        .pipe(concat('app.js'))
        .pipe(dest('./dist/js/'));
    cb();
}

function ugliness(cb){
    src('./src/*.js')
        .pipe(concat('app.js'))
        .pipe(dest('./dist/js/'))
        .pipe(rename('ugly.min.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js/'))
    
    cb();
}

function generateCSS(cb) {
    src('./src/sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(dest('./dist/css/'));
    cb();
}

function cleanFolders(cb) {
    del('dist/**', {force: true})
    cb();
}

exports.default = series(cleanFolders, generateCSS, concatMinify, ugliness);