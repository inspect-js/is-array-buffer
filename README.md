# is-array-buffer

[![Build Status](https://img.shields.io/github/workflow/status/fengyuanchen/is-array-buffer/ci/main.svg)](https://github.com/fengyuanchen/is-array-buffer/actions) [![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/is-array-buffer.svg)](https://codecov.io/gh/fengyuanchen/is-array-buffer) [![Downloads](https://img.shields.io/npm/dm/is-array-buffer.svg)](https://www.npmjs.com/package/is-array-buffer) [![Version](https://img.shields.io/npm/v/is-array-buffer.svg)](https://www.npmjs.com/package/is-array-buffer) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/is-array-buffer.svg)](https://unpkg.com/is-array-buffer/dist/cropper.common.js) [![Dependencies](https://img.shields.io/david/fengyuanchen/is-array-buffer.svg)](https://www.npmjs.com/package/is-array-buffer)

> Check if the given value is an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

## Main files

```text
/
├── index.js         (CommonJS, default)
├── index.esm.js     (ECMAScript Module)
└── index.d.ts       (TypeScript Declaration File)
```

## Install

```shell
npm install is-array-buffer
```

## Usage

```js
import isArrayBuffer from 'is-array-buffer';

isArrayBuffer(new ArrayBuffer());
// > true

isArrayBuffer([]);
// > false
```

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)
