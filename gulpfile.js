var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');

gulp.task('browser-sync', ['css', 'nodemon'], function() {
  browserSync.init({
    proxy: "localhost:3000"
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({script: 'app.js'}).on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  });
});

gulp.task('css', function () {
  gulp.src('scss/app.scss')
  .pipe(sass())
  .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
  .pipe(gulp.dest('public/stylesheets'))
  .pipe(reload({stream:true}));
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch("scss/*.scss", ['css']);
  gulp.watch(["views/**/**", "controllers/*"], reload);
});
