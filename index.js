'use strict';

var constructor = typeof ArrayBuffer === 'function' && ArrayBuffer;
var toString = Object.prototype.toString;

module.exports = function (x) {
  return constructor && (x instanceof constructor || toString.call(x) === '[object ArrayBuffer]');
};
