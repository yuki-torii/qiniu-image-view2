import test from 'ava'
import qiniuImageView2 from '../../../src'

const imageURL = 'http://www.something.com/one.png'

test('test url type', t => {
  t.is(qiniuImageView2(), '')
  t.is(qiniuImageView2(1234), '')
  t.is(qiniuImageView2('test'), 'test')
})

test('test function options', t => {
  t.is(qiniuImageView2(imageURL), imageURL)
  t.is(qiniuImageView2(imageURL, {}), `${imageURL}?imageView2`)

  t.is(qiniuImageView2(imageURL, {
    q: 80
  }), `${imageURL}?imageView2/q/80`)

  t.is(qiniuImageView2(imageURL, {
    mode: 0,
    q: 80
  }), `${imageURL}?imageView2/mode/0/q/80`)

  t.is(qiniuImageView2(imageURL, {
    mode: 0,
    h: 200,
    q: 80,
    format: 'webp'
  }), `${imageURL}?imageView2/mode/0/h/200/q/80/format/webp`)
})
