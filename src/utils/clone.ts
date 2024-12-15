import { isObject } from './isObject';

/**
 * Клонирует переданное значение, создавая его глубокую копию.
 *
 * Функция поддерживает клонирование объектов, массивов и примитивных типов.
 * При клонировании объектов и массивов происходит рекурсивное копирование их свойств и элементов.
 * Методы также клонируются с привязкой к новому объекту.
 *
 * @template T - Тип значения, которое будет клонироваться.
 * @param value - Значение, которое нужно клонировать.
 * @returns Глубокая копия переданного значения того же типа T.
 *
 * @example
 * const original = {
 *   name: 'Дима',
 *   age: 31,
 *   greet() {
 *     console.log(`Привет, меня зовут ${this.name}`);
 *   },
 *   nested: {
 *     array: [1, 2, 3],
 *     method() {
 *       console.log('вложенный метод');
 *     }
 *   }
 * };
 *
 * const cloned = clone(original);
 * cloned.greet(); // Привет, меня зовут Дима
 * cloned.nested.method(); // вложенный метод
 *
 * original.name = 'Вася';
 * console.log(cloned.name); // Вася
 */

export function clone <T> (value: T): T {
  if (Array.isArray(value)) {
    // Рекурсивное клонирование для массивов
    return value.map(item => clone(item)) as unknown as T;
  } else if (isObject(value)) {
    const result: { [key in keyof T]: T[key] } = {} as { [key in keyof T]: T[key] };

    Object.keys(value).forEach(key => {
      const propValue = value[key as keyof T];

      // Клонируем методы и свойства
      result[key as keyof T] = typeof propValue === 'function' ? propValue.bind(result) : clone(propValue);
    });

    return result as T;
  } else {
    // Примитивные типы возвращаются без изменений
    return value;
  }
}
