import { VSegment } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VSegment.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VSegment/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-segment');
  });
});
