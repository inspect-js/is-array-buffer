const babel = require('rollup-plugin-babel');
const pkg = require('./package');

const now = new Date();
const banner = `/*!
 * isArrayBuffer v${pkg.version}
 * https://github.com/fengyuanchen/${pkg.name}
 *
 * Copyright (c) 2015-${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`;

export default {
  entry: 'src/index.js',
  targets: [
    {
      banner,
      dest: 'dist/is-array-buffer.js',
      format: 'umd',
      name: 'isArrayBuffer',
    },
    {
      banner,
      dest: 'dist/is-array-buffer.common.js',
      format: 'cjs',
    },
    {
      banner,
      dest: 'dist/is-array-buffer.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    babel({
      exclude: '/node_modules/**',
    }),
  ],
};
