import { SizeList, ThemeList } from '../../../../enums';
import { VInputMask } from '../';
import { VForm } from '../../Form';
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VInputMask.vue', () => {
  const DEMO_MODEL = ref('+79999999999');

  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VInputMask v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-input-mask');
  });

  it('Проверка v-model', () => {
    const wrapper = mount(() => (
      <VInputMask v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.find('input').element.value).toEqual(DEMO_MODEL.value);
  });

  it('Проверка на блокировку', () => {
    const wrapper = mount(() => (
      <VInputMask
        v-model={DEMO_MODEL.value}
        disabled={true}
      />
    ));

    expect(wrapper.classes()).toContain('v-input--disabled');
  });

  it('Проверка на блокировку через VForm', () => {
    const formModel = ref({});

    const wrapper = mount(() => (
      <VForm
        v-model={formModel.value}
        disabled={true}
      >
        <VInputMask v-model={DEMO_MODEL.value}/>
      </VForm>
    ));

    const input = wrapper.findComponent(VInputMask);

    expect(input.classes()).toContain('v-input--disabled');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VInputMask
        v-model={DEMO_MODEL.value}
        size={SizeList.mini}
      />
    ));

    expect(wrapper.classes()).toContain('v-input--size-mini');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VInputMask
        v-model={DEMO_MODEL.value}
        theme={ThemeList.primary}
      />
    ));

    expect(wrapper.classes()).toContain('v-input--theme-primary');
  });
});
