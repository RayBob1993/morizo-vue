import { isBoolean } from '../';
import { describe, it, expect } from 'vitest';

describe('isBoolean', () => {
  it('Проверка переданных аргументов', () => {
    expect(isBoolean(true)).to.be.true;
    expect(isBoolean(false)).to.be.true;

    expect(isBoolean('')).to.be.false;
    expect(isBoolean('false')).to.be.false;
    expect(isBoolean('true')).to.be.false;
    expect(isBoolean(0)).to.be.false;
    expect(isBoolean(1)).to.be.false;
    expect(isBoolean(null)).to.be.false;
    expect(isBoolean(undefined)).to.be.false;
  });
});
