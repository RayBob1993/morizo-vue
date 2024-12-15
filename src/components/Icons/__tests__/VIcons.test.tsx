import { VIcons } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VIcons.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VIcons/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-icons');
  });
});
