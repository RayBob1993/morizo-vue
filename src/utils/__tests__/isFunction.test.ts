import { isFunction } from '../';
import { describe, it, expect } from 'vitest';

describe('isFunction', () => {
  it('Проверка переданных аргументов', () => {
    expect(isFunction(function () {})).to.be.true;
    expect(isFunction(() => {})).to.be.true;

    expect(isFunction('1')).to.be.false;
    expect(isFunction('')).to.be.false;
    expect(isFunction({})).to.be.false;
    expect(isFunction([])).to.be.false;
    expect(isFunction(false)).to.be.false;
    expect(isFunction(true)).to.be.false;
  });
});
