import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: './src/index.jsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    }
  ],
  external: [
    'react',
    'prop-types'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    peerDepsExternal()
  ]
}