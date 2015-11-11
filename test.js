var assert = require('assert');
var isArrayBuffer = require('./');

describe('isArrayBuffer', function() {
  it('should be failed when the value is not present', function () {
    assert.ok(!isArrayBuffer());
  });

  it('should be failed when the value is an Array', function () {
    assert.ok(!isArrayBuffer(new Array()));
  });

  it('should be passed when the value is an ArrayBuffer', function () {
    assert.ok(isArrayBuffer(new ArrayBuffer()));
  });
});
