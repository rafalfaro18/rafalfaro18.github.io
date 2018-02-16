var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
});

gulp.task('watch', function (){
  gulp.watch('./css/**/*.css', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
});


gulp.task('default', function () {
  runSequence(['browserSync', 'watch'])
});