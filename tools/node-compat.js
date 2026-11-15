// Restore Node's removed util.is* helpers for legacy Hexo 3.7 on Node >= 23.
'use strict';

const util = require('util');
const types = util.types || {};

const fallbacks = {
  isArray: Array.isArray,
  isBoolean: (v) => typeof v === 'boolean',
  isBuffer: Buffer.isBuffer,
  isDate: types.isDate || ((v) => v instanceof Date),
  isError: types.isNativeError || ((v) => v instanceof Error),
  isFunction: (v) => typeof v === 'function',
  isNull: (v) => v === null,
  isNullOrUndefined: (v) => v === null || v === undefined,
  isNumber: (v) => typeof v === 'number',
  isObject: (v) => v !== null && typeof v === 'object',
  isPrimitive: (v) => v === null || (typeof v !== 'object' && typeof v !== 'function'),
  isRegExp: types.isRegExp || ((v) => v instanceof RegExp),
  isString: (v) => typeof v === 'string',
  isSymbol: (v) => typeof v === 'symbol',
  isUndefined: (v) => v === undefined
};

for (const [name, fn] of Object.entries(fallbacks)) {
  if (typeof util[name] !== 'function') util[name] = fn;
}
