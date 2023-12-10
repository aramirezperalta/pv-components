const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js', // Ajusta la salida principal a tu configuración
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js', // Ajusta la salida principal a tu configuración
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