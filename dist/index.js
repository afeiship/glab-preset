/*!
 * name: @feizheng/gulp-pkg-header
 * url: https://github.com/afeiship/gulp-pkg-header
 * version: 1.0.0
 * license: MIT
 */

var header=require("gulp-header"),path=require("path"),nx=require("@feizheng/next-js-core2"),appPath=require("app-root-path").path,pkg=require(path.join(appPath,"./package.json"));require("@feizheng/next-nice-comments");var niceComments=nx.niceComments(["name: <%= pkg.name %>","description: <%= pkg.description %>","url: <%= pkg.homepage %>","version: <%= pkg.version %>","date: "+(new Date).toISOString(),"license: <%= pkg.license %>"],"js");module.exports=function(){return header(niceComments,{pkg:pkg})};