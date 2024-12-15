import { isString } from '../';
import { describe, it, expect } from 'vitest';

describe('isString', () => {
  it('Проверка переданных аргументов', () => {
    expect(isString('')).to.be.true;
    expect(isString('Привет, мир!')).to.be.true;
    expect(isString('1')).to.be.true;
    expect(isString('{}')).to.be.true;

    expect(isString(1)).to.be.false;
    expect(isString({})).to.be.false;
    expect(isString([])).to.be.false;
    expect(isString(true)).to.be.false;
  });
});
