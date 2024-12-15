import { VContainer } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VContainer.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VContainer/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-container');
  });
});

