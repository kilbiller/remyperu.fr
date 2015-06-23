import gulp from "gulp";
import browserSync from "browser-sync";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer-core";
import {
  spawn
}
from "child_process";

gulp.task("browser-sync", function() {
  browserSync.init({
    proxy: "localhost:8000"
  });
});

var node;
gulp.task("server", function() {
  if(node) {
    node.kill();
  }
  node = spawn("node", ["index.js"], {
    stdio: "inherit"
  });
  node.on("close", function(code) {
    if(code === 8) {
      gulp.log("Error detected, waiting for changes...");
    }
  });
});

gulp.task("css", function() {
  gulp.src("scss/app.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer({
      browsers: ["last 2 version"]
    })]))
    .pipe(gulp.dest("public/stylesheets"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task("default", ["css", "server", "browser-sync"], function() {
  gulp.watch("scss/*.scss", ["css"]);
  gulp.watch(["index.js", "routes.js", "views/**/*.jade", "controllers/**/*.js"], ["server", browserSync.reload]);
});
