const babel = require('rollup-plugin-babel');
const pkg = require('./package');

const now = new Date();

export default {
  entry: 'src/index.js',
  targets: [
    {
      dest: 'dist/is-array-buffer.js',
    },
    {
      dest: 'dist/is-array-buffer.common.js',
      format: 'cjs',
    },
    {
      dest: 'dist/is-array-buffer.esm.js',
      format: 'es',
    },
  ],
  format: 'umd',
  moduleName: 'isArrayBuffer',
  plugins: [
    babel({
      exclude: '/node_modules/**',
    }),
  ],
  banner: `/*!
 * isArrayBuffer v${pkg.version}
 * https://github.com/fengyuanchen/${pkg.name}
 *
 * Copyright (c) 2015-${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`,
};
