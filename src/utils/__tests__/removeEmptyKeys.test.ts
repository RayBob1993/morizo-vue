import { removeEmptyKeys } from '../';
import { describe, it, expect } from 'vitest';

describe('removeEmptyKeys', () => {
  it('Проверка переданных аргументов', () => {
    const testObject = {
      prop1: 'Привет',
      prop2: '',
      prop3: null,
      prop4: '1',
      prop5: 1,
      prop6: undefined,
      prop7: []
    };

    expect(removeEmptyKeys(testObject)).toEqual({
      prop1: 'Привет',
      prop4: '1',
      prop5: 1
    });
  });
});
