import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

let targets = [ { dest: 'dist/qiniu-image-view2.js', format: 'umd' } ]

if (process.env.BUILD) {
  targets = targets.concat([
    { dest: 'dist/qiniu-image-view2.common.js', format: 'cjs' },
    { dest: 'dist/qiniu-image-view2.es5.js', format: 'es' }
  ])
}

export default {
  entry: 'src/index.js',
  plugins: [buble(), nodeResolve(), commonjs()],
  moduleName: 'qiniu-image-view2',
  targets: targets
}
