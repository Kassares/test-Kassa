var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = 		require('gulp-watch'),
	jade = require('gulp-jade');
	
	
	
	
	
gulp.task('styles', function () {
	return gulp.src('dist/sass/styles.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(gulp.dest('client/css'))
	
});

gulp.task('jade', function() {
	return gulp.src('dist/jade/*.jade')
	.pipe(jade({
		pretty: true
		}))
	.pipe(gulp.dest('client'));
});


gulp.task('watch', function () {
	gulp.watch('dist/sass/*.sass', ['styles']);
	gulp.watch('dist/jade/*.jade', ['jade']);
});

gulp.task('default', ['watch']);