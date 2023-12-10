const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript(),
    postcss({
      extract: 'dist/styles.css',
    }),
  ],
  external: ['react', 'react-dom']
};