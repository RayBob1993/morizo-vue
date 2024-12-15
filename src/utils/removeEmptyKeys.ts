import { isEmpty } from './isEmpty';

/**
 * @description **removeEmptyKeys** - Удаляет ключи у объекта на первом уровне вложенности, соответствующие условию функции *isEmpty*
 * @param {object} object Значение для проверки.
 * @returns {object} Возвращает объект, очищенный от пустых ключей
 * @example
 *
 * removeEmptyKeys({
 *   prop1: 'Привет',
 *   prop2: '',
 *   prop3: null,
 *   prop4: '1',
 *   prop5: 1,
 *   prop6: undefined,
 *   prop7: []
 * });
 * // => { prop1: 'Привет', prop4: '1', prop5: 1 }
 */
export function removeEmptyKeys <O extends Record<string, O[keyof O]>> (object: O) {
  return Object.fromEntries(
    Object.entries(object)
      .filter(value => !isEmpty(value[1]))
  );
}
