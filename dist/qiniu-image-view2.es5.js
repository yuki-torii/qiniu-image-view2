var type = {
  string: function string (value) {
    return toString.call(value) === '[object String]'
  },
  object: function object (value) {
    return Object(value) === value
  },
  null: function null$1 (value) {
    return value === null
  }
};

var index$2 = {
  type: type
};




var yukiIs_es5 = Object.freeze({
	default: index$2
});

var require$$0 = ( yukiIs_es5 && index$2 ) || yukiIs_es5;

var isString = require$$0.type.string;

/*
 Doc: http://developer.qiniu.com/code/v6/api/kodo-api/image/imageview2.html
*/

var index = function (url, options, type) {
  if ( url === void 0 ) url = '';
  if ( type === void 0 ) type = 'imageView2';

  if (options && isString(url)) {
    url = url + "?" + type;

    Object.keys(options).forEach(function (key) {
      url = url + "/" + key + "/" + (options[key]);
    });
  }

  return isString(url) ? url : ''
};

export default index;
