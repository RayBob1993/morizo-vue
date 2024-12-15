/**
 * @description **uuidv4** - Простая версия утилиты для получения UUID
 * @returns {string} Возвращает сгенерированный id из 36 символов.
 * @example
 * const uuid = uuidv4();
 * // => '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000'
 */
export function uuidv4 (): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);

    return v.toString(16);
  });
}
