import { VBackdrop } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VBackdrop.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VBackdrop modelValue={true}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
  });
});
