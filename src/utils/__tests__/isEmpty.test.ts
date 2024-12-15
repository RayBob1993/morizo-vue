import { isEmpty } from '../';
import { describe, it, expect } from 'vitest';

describe('isEmpty', () => {
  it('Проверка переданных аргументов', () => {
    expect(isEmpty(undefined)).to.be.true;
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty('')).to.be.true;
    expect(isEmpty([])).to.be.true;
    expect(isEmpty({})).to.be.true;
    expect(isEmpty({
      prop: null
    })).to.be.true;
    expect(isEmpty({
      prop: undefined
    })).to.be.true;

    expect(isEmpty(1)).to.be.false;
    expect(isEmpty(0)).to.be.false;
    expect(isEmpty(false)).to.be.false;
  });
});
