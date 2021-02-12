import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: 'index.ts',
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      exports: 'auto',
    },
    {
      format: 'esm',
      file: pkg.module,
    },
  ],
  plugins: [
    typescript(),
  ],
};
