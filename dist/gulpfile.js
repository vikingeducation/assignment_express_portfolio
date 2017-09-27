'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var sass = require('gulp-ruby-sass');

gulp.task('html', function () {
  return gulp.src('views/*.hbs').pipe(pug()).pipe(gulp.dest('build/html'));
});

gulp.task('sass', function () {
  sass('public/stylesheets/*.scss').on('error', sass.logError).pipe(gulp.dest('dist'));
});

gulp.task('babel', function () {
  gulp.src('**/*.js').pipe(sourcemaps.init()).pipe(babel({
    presets: ['env']
  })).pipe(sourcemaps.write('.')).pipe(gulp.dest('dist'));
});

gulp.task('default', ['html', 'sass']);
//# sourceMappingURL=gulpfile.js.map