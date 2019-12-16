var header = require('gulp-header');
var path = require('path');
var nx = require('@feizheng/next-js-core2');
var appPath = require('app-root-path').path;
var pkg = require(path.join(appPath, './package.json'));

require('@feizheng/next-nice-comments');

var niceComments = nx.niceComments(
  [
    'name: <%= pkg.name %>',
    'description: <%= pkg.description %>',
    'url: <%= pkg.homepage %>',
    'version: <%= pkg.version %>',
    'date: ' + new Date().toISOString(),
    'license: <%= pkg.license %>'
  ],
  'js'
);

module.exports = function() {
  return header(niceComments, { pkg: pkg });
};
