import babel from 'rollup-plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.jsx',
  output: [
    {
      file: 'dist/index.min.js',
      format: 'esm'
    }
  ],
  external: [
    'classnames',
    'prop-types'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    peerDepsExternal(),
    terser()
  ]
}