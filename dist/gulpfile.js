const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

function css() {
  return src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(dest('dist'));
}

function watcher() {
  watch('scss/**/*.scss', css);
}

exports.default = series(css, watcher);
