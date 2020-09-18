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
    resolve({
			module: false, // <-- this library is not an ES6 module
			browser: true, // <-- suppress node-specific features
		}),
    commonjs({
      include: 'node_modules/**'
    }),
    html(),
    terser(),
    strip({
      functions: ['console.log']
    }),
    copy({
      targets: [
        { src: 'assets/templates/*', dest: 'dist/assets/templates/' },
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
        '**/*.{html,json,js,css,png,jpg,jpeg,svg}',
      ],
      runtimeCaching: [{
        urlPattern: /\.(?:xlsx|pdf|html)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'templates'
        }
      }]
    })
  ]
};