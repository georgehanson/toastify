import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'

export default {
  entry: './src/index.ts',
  dest: './dist/build.js',
  format: 'es',
  plugins: [
    typescript(),
    scss({
      output: './dist/toastify.css',
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup', 'stage-2'],
      plugins: ['transform-object-assign']
    })
  ]
}
