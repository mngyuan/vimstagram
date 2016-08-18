var gulp = require('gulp');
var sass = require('gulp-sass');
var del  = require('del');

gulp.task('clean', _ => {
  return del(['dist/**/*']);
});

gulp.task('sass', _ => {
  return gulp.src('./src/*.scss')
      .pipe(sass({ includePaths: ['./src/_sass']}).on('error', sass.logError))
      // .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(gulp.dest('dist'));
});

gulp.task('static', _ => {
  gulp.src('src/*.png')
      .pipe(gulp.dest('dist'));
});

gulp.task('html', _ => {
  return gulp.src('src/*.html')
             .pipe(gulp.dest('dist'));
});

gulp.task('js', _ => {
  gulp.src('src/*.js')
             .pipe(gulp.dest('dist'));
  return gulp.src('src/*.json')
             .pipe(gulp.dest('dist'));
});

gulp.task('watch', _ => {
  gulp.watch(['./src/_sass/*.scss', './src/*.scss'], ['sass']);
  gulp.watch(['./src/icons/**'], ['static']);
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/*.js', 'src/*.json'], ['js']);
  // gulp.watch([
  //   'src/*.js'
  // ], ['jekyll-rebuild']);
});

gulp.task('build', ['clean', 'sass', 'static', 'html', 'js']);

gulp.task('default', ['build', 'watch']);
