import { uuidv4 } from '../';
import { describe, it, expect } from 'vitest';

describe('uuidv4', () => {
  it('Проверка соответствия формату строки', () => {
    const uuid = uuidv4();
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

    expect(uuid).toMatch(regex);
  });

  it('Проверка генерации случайного id', () => {
    const uuid = uuidv4();

    expect(uuid).toHaveLength(36);
    expect(typeof uuid).toBe('string');
  });

  it('Ожидаем, что все UUID уникальны', () => {
    const uuids = new Set<string>();

    for (let i = 0; i < 100; i++) {
      uuids.add(uuidv4());
    }

    expect(uuids.size).toBe(100);
  });
});
