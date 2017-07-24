const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('default', ['dev:styles', 'build:styles'], () => {
  gulp.watch('src/**/*.scss', ['dev:styles', 'build:styles']);
});

gulp.task('dev:styles', () => {
  return gulp.src('src/mono.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./docs/css'));
});

gulp.task('build:styles', () => {
  return gulp.src('src/mono.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});
