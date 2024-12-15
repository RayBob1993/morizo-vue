import { isNumber } from '../';
import { describe, it, expect } from 'vitest';

describe('isNumber', () => {
  it('Проверка переданных аргументов', () => {
    expect(isNumber(1)).to.be.true;
    expect(isNumber(1.1)).to.be.true;
    expect(isNumber(.1)).to.be.true;
    expect(isNumber(Infinity)).to.be.true;
    expect(isNumber(Number.MIN_VALUE)).to.be.true;

    expect(isNumber('1')).to.be.false;
    expect(isNumber('')).to.be.false;
    expect(isNumber({})).to.be.false;
    expect(isNumber([])).to.be.false;
    expect(isNumber(false)).to.be.false;
    expect(isNumber(true)).to.be.false;
  });
});
