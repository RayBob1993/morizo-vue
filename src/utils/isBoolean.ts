/**
 * @description **isBoolean** - Проверка переданного значения на boolean тип
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — boolean значение, иначе — false.
 * @example
 *
 * isBoolean(3);
 * // => false
 *
 * isBoolean(0);
 * // => false
 *
 * isBoolean(true);
 * // => true
 *
 * isBoolean(false);
 * // => true
 */
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
