/** @license Apache-2.0 */

'use strict';

/**
* Return the operation side string associated with a supported BLAS operation side value.
*
* @module @stdlib/blas-base-operation-side-resolve-str
*
* @example
* var str2enum = require( '@stdlib/blas-base-operation-side-str2enum' );
* var resolve = require( '@stdlib/blas-base-operation-side-resolve-str' );
*
* var v = resolve( str2enum( 'left' ) );
* // returns 'left'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
