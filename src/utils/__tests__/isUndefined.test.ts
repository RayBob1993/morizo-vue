import { isUndefined } from '../';
import { describe, it, expect } from 'vitest';

describe('isUndefined', () => {
  it('Проверка переданных аргументов', () => {
    expect(isUndefined(undefined)).to.be.true;

    expect(isUndefined('undefined')).to.be.false;
    expect(isUndefined(null)).to.be.false;
  });
});
