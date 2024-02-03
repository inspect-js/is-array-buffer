'use strict';

var callBind = require('call-bind');
var callBound = require('call-bind/callBound');
var GetIntrinsic = require('get-intrinsic');

var $ArrayBuffer = GetIntrinsic('ArrayBuffer', true);
var $byteLength = callBound('ArrayBuffer.prototype.byteLength', true);
var $toString = callBound('Object.prototype.toString');

// in node 0.10, ArrayBuffers have no prototype methods, but have an own slot-checking `slice` method
var abSlice = $ArrayBuffer && !$byteLength && new $ArrayBuffer().slice;
var $abSlice = abSlice && callBind(abSlice);

module.exports = $byteLength || $abSlice
	? function isArrayBuffer(obj) {
		if (!obj || typeof obj !== 'object') {
			return false;
		}
		try {
			if ($byteLength) {
				$byteLength(obj);
			} else {
				$abSlice(obj, 0);
			}
			return true;
		} catch (e) {
			return false;
		}
	}
	: $ArrayBuffer
		// in node 0.8, ArrayBuffers have no prototype or own methods, but also no Symbol.toStringTag
		? function IsArrayBuffer(obj) {
			return $toString(obj) === '[object ArrayBuffer]';
		}
		: function isArrayBuffer(obj) { // eslint-disable-line no-unused-vars
			return false;
		};
