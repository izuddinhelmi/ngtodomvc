var gulp        = require('gulp'),
    include     = require('gulp-include'),
    rename     	= require('gulp-rename'),
    uglify 		= require('gulp-uglify'),
    cssmin 		= require('gulp-cssmin'),
    livereload 	= require('gulp-livereload')
    ngAnnotate 	= require('gulp-ng-annotate');
 
gulp.task("scripts", function() {
    gulp.src('js/app.js')
        .pipe(include())
        .pipe(ngAnnotate())
        .pipe(gulp.dest("dist/js"))
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

gulp.task("styles", function() {
    gulp.src('css/app.css')
        .pipe(include())
        .pipe(gulp.dest("dist/css"))
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('css/*.css', ['styles']);
  gulp.watch('js/*.js', ['scripts']);
});
 
gulp.task("default", ['watch']);