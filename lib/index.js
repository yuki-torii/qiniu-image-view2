'use strict';

var isString = require('yuki-is').type;
console.log(isString);
Object.keys = Object.keys || require('object-keys');

/*
 Doc: http://developer.qiniu.com/code/v6/api/kodo-api/image/imageview2.html
*/

module.exports = function () {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var options = arguments[1];
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'imageView2';

  if (options && isString(url)) {
    url = url + '?' + type;

    Object.keys(options).forEach(function (key) {
      url = url + '/' + key + '/' + options[key];
    });
  }

  return isString(url) ? url : '';
};