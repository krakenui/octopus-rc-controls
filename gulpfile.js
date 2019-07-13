var gulp = require("gulp");
var del = require("del");

gulp.task("clean", function() {
  return del("./dist/**", { force: true });
});

gulp.task("copy", function() {
  return gulp.src("./*.{json,md}").pipe(gulp.dest("./dist"));
});
