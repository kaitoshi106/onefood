var gulp = require('gulp')
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')
// task 1
gulp.task('sass', function(){
    return gulp.src('resources/css/style.scss')
            .pipe(sass())
            .pipe(gulp.dest('resources/css'))
            .pipe(livereload());
})
// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen()
    gulp.watch('resources/**/*.scss', gulp.series['sass']);
    
});
