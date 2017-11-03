const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task("compile", function(){
    gulp.src("src/*.js").pipe(babel()).pipe(gulp.dest("build"));
})

gulp.task("compileAllFolders", function(){
    gulp.src("src/**/*.js").pipe(babel()).pipe(gulp.dest("build"));
})

gulp.task("default", ["compile", "compileAllFolders"]);