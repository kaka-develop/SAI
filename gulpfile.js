
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default',['serve'], function () {

});

gulp.task('serve', ['sass','sass:watch'], function() {

    browserSync.init({
        server: 'prototype'
    });

    gulp.watch('prototype/**/**').on('change', browserSync.reload);
});


gulp.task('sass', function () {
    return gulp.src('prototype/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('prototype/content/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('prototype/sass/**/*.scss', ['sass']);
});