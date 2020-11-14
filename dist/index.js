/*!
 * name: @jswork/gulp-pkg-header
 * url: https://github.com/afeiship/gulp-pkg-header
 * version: 1.0.0
 * license: MIT
 */

var header=require("gulp-header"),path=require("path"),nx=require("@jswork/next"),appPath=require("app-root-path").path,pkg=require(path.join(appPath,"./package.json"));require("@jswork/next-nice-comments");var generateComments=function(e){e=e||"js";return nx.niceComments(["name: <%= pkg.name %>","description: <%= pkg.description %>","homepage: <%= pkg.homepage %>","version: <%= pkg.version %>","date: "+(new Date).toISOString(),"license: <%= pkg.license %>"],e)};module.exports=function(e){return header(generateComments(e),{pkg:pkg})};