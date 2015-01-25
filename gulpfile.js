var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "localhost:3000"
  });
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch(["public/js/**/*.js", "./*.html"], reload);
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({script: './bin/www'}).on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  });
});
