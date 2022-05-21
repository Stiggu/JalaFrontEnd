const {src, dest, series} = require("gulp");
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('node-sass'))
const del = require('del')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const inject = require('gulp-inject')
const es = require('event-stream')

function concatMinify(cb) {
    src('./src/*.js')
        .pipe(concat('app.js'))
        .pipe(dest('./dist/js/'));
    cb();
}

function uglification(cb){
    src('./src/*.js')
        .pipe(concat('app.js'))
        .pipe(dest('./dist/js/'))
        .pipe(rename('ugly.min.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js/'))
    
    cb();
}

function generateCSS(cb) {
    src(['./src/sass/*.sass', './src/sass/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(dest('./dist/css/'));
    cb();
}

const gCSS = src(['./src/sass/*.sass', './src/sass/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(dest('./dist/css/'));

const ugly = src('./src/*.js')
    .pipe(concat('app.js'))
    .pipe(dest('./dist/js/'))
    .pipe(rename('ugly.min.js'))
    .pipe(uglify())
    .pipe(dest('./dist/js/'));

function cleanFolders(cb) {
    del('dist/**', {force: true})
    cb();
}

function injectTohtml(cb){
    src('./src/mainBootstrap.html')
        .pipe(inject(es.merge(ugly, gCSS), { relative:true }))
        .pipe(dest('./dist'))
    cb();
}
exports.default = series(cleanFolders, injectTohtml);