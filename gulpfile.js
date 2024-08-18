const {src, dest, watch, parallel, series} = require('gulp');

/* HTML*/
const fileinclude   = require('gulp-file-include');
const htmlclean = require('gulp-htmlclean');
const versionNumber = require('gulp-version-number');

/* Sass */
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps= require('gulp-sourcemaps');

/* Js */
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

/* Img */
const avif = require("gulp-avif");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const svgsprite = require("gulp-svg-sprite");
const newer = require("gulp-newer");

/* Fonts */
// Windows: const fonter= require('gulp-fonter');
// MAac:
const fonter= require('gulp-fonter-unx');
const ttf2woff2 = require('gulp-ttf2woff2');


/* Other */
const browserSync = require('browser-sync').create();
const clean = require("gulp-clean");



function html() {
    return src('app/assets/html/*.html')
        .pipe(fileinclude())
        .pipe(versionNumber({
            'value': '%DT%',
            'append': {
                'key': '_v',
                'cover': 0,
                'to': [
                    'css',
                    'js'
                ]
            },
            'output': {
                'file': 'gulp/version.json'
            },
        }))
        .pipe(htmlclean())
        .pipe(dest('app'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('app/assets/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({overrideBrowserslist: ['last 5 version']}))
        .pipe(concat('style.min.css'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src([
        'node_modules/@splidejs/splide/dist/js/splide.js',
        'app/assets/js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function images() {
    return src([
        'app/assets/img/**/*.*', '!app/assets/img/**/*.svg'
    ], {base: 'app/assets/img'})
        .pipe(newer('app/img'))
        .pipe(avif({quality: 50}))
        .pipe(src('app/assets/img/**/*.*'))
        .pipe(newer('app/img'))
        .pipe(webp())
        .pipe(src('app/assets/img/**/*.*'))
        .pipe(newer('app/img'))
        .pipe(imagemin())
        .pipe(dest('app/img'))
}

function svgSprite() {
    return src('app/assets/img/**/*.svg')
        .pipe(svgsprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg',
                    example: true
                }
            }
        }))
        .pipe(dest('app/img/svg'))
}

function fonts() {
    return src('app/assets/fonts/**/*.*', {base: 'app/assets/fonts'})
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))
        .pipe(src('app/fonts/**/*.ttf'))
        .pipe(ttf2woff2())
        .pipe(dest('app/fonts'))
}

function watching() {
    watch(['app/assets/html/**/*'], html)
    watch(['app/assets/scss/**/*.scss'], styles)
    watch(['app/assets/js/**/*.js'], scripts)
    watch(['app/assets/img'], images)
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        },
        port: 4000
    });
}
function cleanDist() {
    return src('dist')
        .pipe(clean())
}

function buildDist() {
    return src([
        'app/**/*.html',
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/img/**/*.*',
        'app/fonts/**/*.*',
    ], {base: 'app'})
        .pipe(dest('dist'))
}

exports.svgSprite = svgSprite;

exports.images = images;
exports.fonts = fonts;

const develop = parallel(html, styles, scripts, images, fonts);
exports.build = series(cleanDist, buildDist);
exports.default = parallel(develop, browsersync, watching);
