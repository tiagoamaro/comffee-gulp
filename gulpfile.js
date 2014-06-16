/*
 * Comffee-gulp
 *
 * Copyright (c) 2014 Tiago Amaro
 * Licensed under the MIT license.
 */

var gulp = require('gulp');

var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var rimraf = require('rimraf');

var paths = {
  scripts: ['src/**/*.coffee', 'src/**/*.js']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb){
  rimraf('build/', cb);
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript
  return gulp.src(paths.scripts)
    .pipe(coffee())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('build/js'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts']);
