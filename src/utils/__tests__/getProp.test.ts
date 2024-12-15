import { getProp } from '../';
import { describe, it, expect } from 'vitest';

describe('getProp', () => {
  it('Проверка переданных аргументов', () => {
    const testObject = {
      a: {
        b: {
          c: 'd'
        }
      },
      foo: {
        ['@@::']: 'hello',
        'abc.': 'cde'
      },
      key: 'value'
    };

    expect(getProp(testObject, 'a.b.c')).toBe('d');
    expect(getProp(testObject, 'key')).toBe('value');
    expect(getProp(testObject, 'foo.@@::')).toBe('hello');
    expect(getProp(testObject, 'disabled')).toBeUndefined();
  });
});
