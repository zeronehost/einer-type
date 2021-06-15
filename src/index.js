/**
 * 判断是否是数组
 * @param {any} x
 * @returns {boolean}
 */
export const isArray = (x) =>
  Object.prototype.toString.call(x).toLowerCase() === "[object array]";
/**
 * 判断是否是对象
 * @param {any} x
 * @returns {boolean}
 */
export const isObject = (x) =>
  Object.prototype.toString.call(x).toLowerCase() === "[object object]";
/**
 * 判断是否是字符串
 * @param {any} x
 * @returns {boolean}
 */
export const isString = (x) =>
  Object.prototype.toString.call(x).toLowerCase() === "[object string]";
/**
 * 判断是否是数字
 * @param {any} x
 * @returns {boolean}
 */
export const isNumber = (x) =>
  Object.prototype.toString.call(x).toLowerCase() === "[object number]";
/**
 * 判断是否是bool
 * @param {any} x
 * @returns {boolean}
 */
export const isBoolean = (x) =>
  Object.prototype.toString.call(x).toLowerCase() === "[object boolean]";

/**
 * 判断是否是函数
 * @param {any} x
 * @returns {boolean}
 */
export const isFunction = (x) =>
  Object.prototype.toString.call(x).toLowerCase() === "[object function]";
/**
 * 判断是否是async函数
 * @param {any} x
 * @returns {boolean}
 */
export const isAsyncFunction = (x) =>
  Object.prototype.toString.call(x).toLowerCase() === "[object asyncfunction]";
/**
 * 判断对象中是否存在该属性
 * @param {object} obj
 * @param {string} attr
 * @returns {boolean}
 */
export const has = (obj, attr) =>
  isObject(obj)
    ? attr && isString(attr)
      ? Object.hasOwnProperty.call(obj, attr)
      : false
    : false;
