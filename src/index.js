var header = require('gulp-header');
var path = require('path');
var nx = require('@feizheng/next-js-core2');
var appPath = require('app-root-path').path;
var pkg = require(path.join(appPath, './package.json'));
var DEFAULT_FORMAT = 'yyyy-mm-dd HH:MM:ss';
var dateFormat = require('dateformat');

require('@feizheng/next-nice-comments');

var niceComments = nx.niceComments(
  [
    'name: <%= pkg.name %>',
    'description: <%= pkg.description %>',
    'url: <%= pkg.homepage %>',
    'version: <%= pkg.version %>',
    'date: ' + dateFormat(new Date(), DEFAULT_FORMAT),
    'license: <%= pkg.license %>'
  ],
  'js'
);

module.exports = function() {
  return header(niceComments, { pkg: pkg });
};
