var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('browser-sync', function () {
  browserSync.init({
    port: 3000,
    server: {
      baseDir: "./src"
    }
  });

  gulp.watch("src/**", ['watch']);
});

gulp.task('watch', function (done) {
  browserSync.reload();
  done();
});

gulp.task('default', ['browser-sync']);