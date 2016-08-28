const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');
const rename = require('gulp-rename');

gulp.task('default', ['styles', 'scripts']);

gulp.task('styles', () => {
  return gulp.src('./dist/css/styles.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', () =>{
  return gulp.src('./dist/js/index.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

