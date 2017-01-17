# qiniu-image-view2
⛩ qiniu-image-view2
[![Travis](https://img.shields.io/travis/yuki-torii/qiniu-image-view2.svg?style=flat-square)](https://travis-ci.org/yuki-torii/yyuki-git-commit)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/limichange/yuki-git-commit/master/LICENSE)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

## Install
```bash
$ npm i --save qiniu-image-view2
# or
$ yarn add qiniu-image-view2
```

## Usage
```js
import qiniuImageView2 from 'qiniu-image-view2'

const imageURL = 'http://www.something.com/one.png'

qiniuImageView2(imageURL, {
  mode: 0,
  h: 200,
  q: 80,
  format: 'webp'
})

// => http://www.something.com/one.png?imageView2/mode/0/h/200/q/80/format/webp
```

## License
MIT © [Limichange](https://github.com/limichange)
