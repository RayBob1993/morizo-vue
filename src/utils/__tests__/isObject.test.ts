import { isObject } from '../';
import { describe, it, expect } from 'vitest';

describe('isObject', () => {
  it('Проверка переданных аргументов', () => {
    expect(isObject({})).to.be.true;

    expect(isObject([])).to.be.false;
    expect(isObject(1)).to.be.false;
    expect(isObject('')).to.be.false;
    expect(isObject(true)).to.be.false;
  });
});
