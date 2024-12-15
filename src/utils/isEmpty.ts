import { isObject } from './isObject';

/**
 * @description **isEmpty** - Проверка переданного значения на пустоту
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — пустое, иначе — false.
 * @example
 *
 * isEmpty(undefined);
 * // => true
 *
 * isEmpty(null);
 * // => true
 *
 * isEmpty('');
 * // => true
 *
 * isEmpty([]);
 * // => true
 *
 * isEmpty({});
 * // => true
 */
export function isEmpty (value: any): boolean {
  const emptyValues = [undefined, null, ''];

  if (isObject(value)) {
    return !Object.entries(value)
      .filter(value => !emptyValues.includes(value[1]))
      .length;
  }

  if (Array.isArray(value)) {
    return !Boolean(value.length);
  }

  return emptyValues.includes(value);
}
