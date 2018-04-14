const assert = require('assert');
const isArrayBuffer = require('./');

describe('is-array-buffer', () => {
  it('should return true if it is an ArrayBuffer', () => {
    assert(isArrayBuffer(new ArrayBuffer()));
  });

  it('should return false if it is not an ArrayBuffer', () => {
    assert(!isArrayBuffer([]));
  });
});
