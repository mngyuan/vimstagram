var gulp  = require('gulp');
var sass  = require('gulp-sass');

gulp.task('sass', _ => {
  return gulp.src('./src/*.scss')
      .pipe(frontMatter())
      .pipe(sass({ includePaths: ['./src/_sass']}).on('error', sass.logError))
      // .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(gulp.dest('dist'));
});

gulp.task('static', _ => {
  gulp.src('src/icons/**')
      .pipe(gulp.dest('dist/icons'));
});

gulp.task('html', _ => {
  return gulp.src('src/*.html')
             .pipe(gulp.dest('dist'));
});

gulp.task('watch', _ => {
  gulp.watch(['./src/_sass/*.scss', './src/*.scss'], ['sass']);
  gulp.watch(['src/icons/**'], ['static']);
  gulp.watch(['src/*.html'], ['html']);
  // gulp.watch([
  //   'src/*.js'
  // ], ['jekyll-rebuild']);
});

gulp.task('default', ['watch']);
