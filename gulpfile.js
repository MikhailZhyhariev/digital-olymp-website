'use strict'

var gulp = require('gulp');
var prefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var cssmin = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var del = require('del');
var browserSync = require('browser-sync');
var ghpages = require('gh-pages');

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  src: {
    html: 'src/*.html',
    js: 'src/js/bundle.js',
    style: 'src/style/style.+(sass|scss)',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/style/**/*.+(sass|scss)',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
}

gulp.task('html:build', function() {
  return gulp.src(path.src.html)
             .pipe(rigger())
             .pipe(gulp.dest(path.build.html))
});

gulp.task('js:build', function() {
  return gulp.src(path.src.js)
             .pipe(rigger())
             .pipe(sourcemaps.init())
             .pipe(uglify())
             .pipe(sourcemaps.write())
             .pipe(gulp.dest(path.build.js))
});

gulp.task('style:build', function() {
  return gulp.src(path.src.style)
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(prefixer())
             .pipe(cssmin())
             .pipe(sourcemaps.write())
             .pipe(gulp.dest(path.build.css))
});

gulp.task('img:build', function() {
  return gulp.src(path.src.img)
             .pipe(imagemin({
                progressive: true,
                svgoPluggins: [{removeViewBox: false}],
                use: [pngquant()],
                interlaced: true
              }))
             .pipe(gulp.dest(path.build.img))
});

gulp.task('fonts:build', function() {
  return gulp.src(path.src.fonts)
             .pipe(gulp.dest(path.build.fonts))
});

gulp.task('clean', function() {
  return del(path.clean)
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel(
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'img:build'
  )
))

gulp.task('watch', function() {
  gulp.watch(path.watch.html, gulp.series('html:build'));
  gulp.watch(path.watch.style, gulp.series('style:build'));
  gulp.watch(path.watch.js, gulp.series('js:build'));
  gulp.watch(path.watch.img, gulp.series('img:build'));
  gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});

gulp.task('webserver', function() {
  browserSync.init({
    server: 'build'
  });

  browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('webserver', 'watch')));
// gulp.task('default', gulp.parallel('webserver', 'watch'));

gulp.task('deploy', function() {
  return ghpages.publish('build', function(err) {});
})
