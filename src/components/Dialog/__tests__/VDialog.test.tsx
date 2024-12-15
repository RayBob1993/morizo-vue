import { VDialog } from '../';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import { mount } from '@vue/test-utils';

describe('VDialog.vue', () => {

  it('Проверка отрисовки', () => {
    const DEMO_MODEL = ref(true);

    const wrapper = mount(() => (
      <VDialog v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('.v-dialog')).toBeTruthy();
    expect(wrapper.find('.v-dialog--open')).toBeTruthy();
  });
});
