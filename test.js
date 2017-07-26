var assert = require('assert');
var isArrayBuffer = require('./');

it('should return true if it is an ArrayBuffer', function () {
  assert(isArrayBuffer(new ArrayBuffer()));
});

it('should return false if it is not an ArrayBuffer', function () {
  assert(!isArrayBuffer(new Array()));
});
