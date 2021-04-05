import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
// import { terser } from 'rollup-plugin-terser'; // - Prod only


import pkg from './package.json';

const extensions = [ '.js' ];
const pkgName = 'easyFormPersist';
const outputFile = `dist/${ pkgName }.js`;
export default {

    input: './src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: pkgName,
        },
        {
            file: pkg.module,
            format: 'es',
            name: pkgName,
        },
        {
            file: `dist/${ pkgName }.js`,
            format: 'iife',
            name: pkgName
        }
    ],
    plugins: [
        babel( {
            babelHelpers: 'bundled',
            // exclude: 'node_modules/**',
            // extensions,
        } ),
        resolve(),
        commonjs(),
        // terser(), // -- LIVE ONLY
        serve( {
            open: true,
            openPage: '/',
            host: 'localhost',
            port: 3003,
            contentBase: [ './example' ],
        } ),
        livereload( {
            watch: [ './example' ],
            exts: [ 'html', 'js', 'css' ],
        } ),
    ]
};