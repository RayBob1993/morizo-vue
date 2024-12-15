import { VForm } from '../';
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VForm.vue', () => {
  const DEMO_TEXT = 'Контент формы';

  const DEMO_MODEL = ref({
    name: '',
    age: ''
  });

  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VForm v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-form');
  });

  it('Проверка слота', () => {
    const wrapper = mount(() => (
      <VForm
        v-model={DEMO_MODEL.value}
        v-slots={{
          default: () => DEMO_TEXT
        }}
      />
    ));

    expect(wrapper.text()).toEqual(DEMO_TEXT);
  });

  it('Проверка блокировки', () => {
    const wrapper = mount(() => (
      <VForm
        v-model={DEMO_MODEL.value}
        disabled={true}
      />
    ));

    expect(wrapper.classes()).toContain('v-form--disabled');
  });
});
