import { VFormItem } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VFormItem.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VFormItem/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-form-item');
  });
});
