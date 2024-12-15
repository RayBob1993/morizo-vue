import { VPlaceholder } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VPlaceholder.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VPlaceholder/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-placeholder');
  });
});
