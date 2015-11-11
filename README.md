# is-array-buffer

> Check if the given value is an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).


## Install

```
npm install is-array-buffer
```


## Usage

```js
var isArrayBuffer = require('is-array-buffer');

isArrayBuffer();
// > false

isArrayBuffer(new Array());
// > false

isArrayBuffer(new ArrayBuffer());
// > true
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Fengyuan Chen](http://chenfengyuan.com)
