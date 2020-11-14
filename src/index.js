var header = require('gulp-header');
var path = require('path');
var nx = require('@jswork/next');
var appPath = require('app-root-path').path;
var pkg = require(path.join(appPath, './package.json'));

require('@jswork/next-nice-comments');

var generateComments = function (inType) {
  var type = inType || 'js';
  return nx.niceComments(
    [
      'name: <%= pkg.name %>',
      'description: <%= pkg.description %>',
      'homepage: <%= pkg.homepage %>',
      'version: <%= pkg.version %>',
      'date: ' + new Date().toISOString(),
      'license: <%= pkg.license %>'
    ],
    type
  );
};

module.exports = function (inType) {
  return header(generateComments(inType), { pkg: pkg });
};
