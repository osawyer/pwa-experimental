import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import { generateSW } from 'rollup-plugin-workbox';
import html from '@open-wc/rollup-plugin-html';
import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.html',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    resolve(),
    html(),
    terser(),
    strip({
      functions: ['console.log']
    }),
    copy({
      targets: [
        { src: 'assets/docs/*', dest: 'dist/assets/docs/' },
        { src: 'assets/icons/*', dest: 'dist/assets/icons/' },
        { src: 'assets/img/*', dest: 'dist/assets/img/' },
        { src: 'assets/screenshots/*', dest: 'dist/assets/screenshots/' },
        { src: 'styles/global.css', dest: 'dist/styles/'},
        { src: 'manifest.json', dest: 'dist/'}
      ],
      verbose: true
    }),
    generateSW({
      swDest: 'dist/pwabuilder-sw.js',
      globDirectory: 'dist/',
      globPatterns: [
        'styles/*.css',
        '**/*/*.svg',
        '*.js',
        '*.html',
        'assets/**/*',
        '*.json',
        'assets/docs/costings-template.xlsx',
        '*.xlsx'
      ]
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};