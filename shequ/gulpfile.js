var gulp         = require('gulp'),
    less         = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync').create(),
    reload       = browserSync.reload;
    
    gulp.task('serve', ['less'], function () {
      browserSync.init({
        server: './'
      });
      gulp.watch('./*.html').on('change', reload);  
    });
    
    gulp.watch('./css/app.less', ['less']);
    gulp.task('less', function () {
      gulp.src('./css/app.less')
          .pipe(less())
          .pipe(autoprefixer())
          .pipe(gulp.dest('./css/'))
          .pipe(reload({stream: true}));
    });
    
    gulp.task('default', ['serve']);
