const gulp    = require('gulp');
const concat  = require('gulp-concat');
const uglify  = require('gulp-uglify');
const webpack = require('webpack-stream');

gulp.task('default', function(done){

    gulp.src('./src/main.js')
        .pipe(
            webpack({
                mode: "production"
            })
        )
        .pipe(
            gulp.dest('./dist')
        );

    done();

});
