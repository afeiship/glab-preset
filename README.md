# gulp-pkg-header
> Gulp header form package.json.

## installation
```shell
npm install -D @jswork/gulp-pkg-header
```

## usage
```js
const header = require("@jswork/gulp-pkg-header");

// type: 'js'|'html'|'css'|'raw'

gulp.task('build' , function(){
  return gulp.src("./src/*.js")
    .pipe(header({ type: 'js' }))
    .pipe(gulp.dest("dist"));
});
```
