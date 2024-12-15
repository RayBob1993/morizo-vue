import { VAffix } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VAffix.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VAffix/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-affix');
  });
});
