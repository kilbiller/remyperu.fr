var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    proxy: "localhost:3000"
  });
});

gulp.task('default', ['browser-sync'], function() {
});
