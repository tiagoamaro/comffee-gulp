/*
 * Comffee-gulp
 *
 * Copyright (c) 2014 Tiago Amaro
 * Licensed under the MIT license.
 */

var gulp = require('gulp');

var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var rimraf = require('gulp-rimraf');

var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var compass = require('gulp-compass');
var minifycss = require('gulp-minify-css');

var paths = {
  scripts: ['src/**/*.coffee', 'src/**/*.js'],
  stylesheets: ['src/**/*.sass', 'src/**/*.scss', 'src/**/*.css'],
  cache: ['build/', '.sass-cache/']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb){
  return gulp.src(paths.cache)
    .pipe(plumber())
    .pipe(rimraf());
});

gulp.task('scripts', function() {
  // Minify and copy all JavaScript

  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(coffee())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('compass', function(){

  return gulp.src(paths.stylesheets)
    .pipe(plumber())
    .pipe(compass({
      css: 'build/css',
      sass: 'src/css',
      font: 'fonts',
      image: 'images',
      comments: false,
      bundle_exec: true,
      require: ['bootstrap-sass']
    }))
    .pipe(concat('all.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.stylesheets, ['compass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'compass']);
