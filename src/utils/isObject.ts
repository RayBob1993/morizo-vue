/**
 * @description **isObject** - Проверка переданного значения на объект
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — объект, иначе — false.
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject(1);
 * // => false
 *
 * isObject([]);
 * // => false
 */
export const isObject = (value: unknown): value is object => Object.prototype.toString.call(value) === '[object Object]';
