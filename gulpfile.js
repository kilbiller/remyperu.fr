var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');

gulp.task('browser-sync', ['sass', 'nodemon'], function() {
  browserSync.init(null, {
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

gulp.task('sass', function () {
gulp.src('scss/app.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/stylesheets'))
  .pipe(reload({stream:true}));
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch(["views/**/**", "controllers/*"], reload);
});
