const isString = require('yuki-is').type.string

/*
 Doc: http://developer.qiniu.com/code/v6/api/kodo-api/image/imageview2.html
*/

module.exports = function (url = '', options, type = 'imageView2') {
  if (options && isString(url)) {
    url = `${url}?${type}`

    Object.keys(options).forEach(key => {
      url = `${url}/${key}/${options[key]}`
    })
  }

  return isString(url) ? url : ''
}
