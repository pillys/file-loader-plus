/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
var loaderUtils = require('loader-utils');
module.exports = function(content) {
  this.cacheable && this.cacheable();
  if (!this.emitFile) throw new Error('emitFile is required from module system');
  var queryPlus = this.options.module.loaders.filter(function(v) {
    return v.loader === 'file-plus';
  })[0].query;
  var url = loaderUtils.interpolateName(this, queryPlus.name || '[hash].[ext]', {
    context: queryPlus.context || this.options.context,
    content: content,
    regExp: queryPlus.regExp
  });
  if (queryPlus.map) {
    url = queryPlus.map(url, this.resourcePath);
  }
  this.emitFile(url, content);
  return 'module.exports = __webpack_public_path__ + ' + JSON.stringify(url) + ';';
};

module.exports.raw = true;