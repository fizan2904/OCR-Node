const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task("compile", function(){
    gulp.src("src/*.js").pipe(babel()).pipe(gulp.dest("build"));
})

gulp.task("compileAllFolders", function(){
    gulp.src("src/**/*.js").pipe(babel()).pipe(gulp.dest("build"));
})

gulp.task("html", function(){
    gulp.src("src/**/*.html").pipe(gulp.dest("build/"));
})

gulp.task("css", function(){
    gulp.src("src/**/*.css").pipe(gulp.dest("build/"));
})


gulp.task("default", ["compile", "compileAllFolders", "html", "css"]);