import { VDrawer } from '../';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import { mount } from '@vue/test-utils';

describe('VDrawer.vue', () => {
  it('Проверка отрисовки', () => {
    const DEMO_MODEL = ref(true);

    const wrapper = mount(() => (
      <VDrawer v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('.v-drawer')).toBeTruthy();
    expect(wrapper.find('.v-drawer--open')).toBeTruthy();
  });
});
