'use strict';

var toString = Object.prototype.toString;

module.exports = function (x) {
  return x instanceof ArrayBuffer || toString.call(x) === '[object ArrayBuffer]';
};
