/**
 * @description **isFunction** - Проверка переданного значения на функцию
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — функция, иначе — false.
 * @example
 *
 * isFunction(3);
 * // => false
 *
 * isFunction('3');
 * // => false
 *
 * isFunction(function () {});
 * // => true
 */
export function isFunction (value: unknown): value is void {
  return typeof value === 'function';
}
