# gulp-pkg-header
> Gulp header form package.json.

## installation
```shell
npm install -D @jswork/gulp-pkg-header
```

## usage
```js
const header = require("gulp-pkg-header");
gulp.task('build' , function(){
  return gulp.src("./src/*.js")
    .pipe(header())
    .pipe(gulp.dest("dist"));
});
```
