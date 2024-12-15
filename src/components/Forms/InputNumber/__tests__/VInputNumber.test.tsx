import { SizeList, ThemeList } from '../../../../enums';
import { VInputNumber } from '../';
import { VForm } from '../../Form';
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VInputNumber.vue', () => {
  const DEMO_MODEL = ref(1);

  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VInputNumber v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-input-number');
  });

  it('Проверка v-model', () => {
    const wrapper = mount(() => (
      <VInputNumber v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.find('input').element.value).toEqual(`${DEMO_MODEL.value}`);
  });

  it('Изменение v-model при клике на кнопки', async () => {
    const num = ref(0);

    const wrapper = mount(() => (
      <VInputNumber
        v-model={num.value}
      />
    ));

    const buttonDecrement = wrapper.find('.v-input-number__button--decrement');
    const buttonIncrement = wrapper.find('.v-input-number__button--increment');

    await buttonIncrement.trigger('click');
    expect(num.value).toEqual(1);

    await buttonDecrement.trigger('click');
    expect(num.value).toEqual(0);
  });

  it('Изменение v-model при клике на кнопки с учётом шага', async () => {
    const num = ref(0);

    const wrapper = mount(() => (
      <VInputNumber
        v-model={num.value}
        step={2}
      />
    ));

    const buttonDecrement = wrapper.find('.v-input-number__button--decrement');
    const buttonIncrement = wrapper.find('.v-input-number__button--increment');

    await buttonIncrement.trigger('click');
    expect(num.value).toEqual(2);

    await buttonDecrement.trigger('click');
    expect(num.value).toEqual(0);
  });

  it('Проверка на блокировку', () => {
    const wrapper = mount(() => (
      <VInputNumber
        v-model={DEMO_MODEL.value}
        disabled={true}
      />
    ));

    expect(wrapper.classes()).toContain('v-input-number--disabled');
  });

  it('Проверка на блокировку через VForm', () => {
    const wrapper = mount(() => (
      <VForm
        modelValue={{}}
        disabled={true}
      >
        <VInputNumber v-model={DEMO_MODEL.value}/>
      </VForm>
    ));

    const input = wrapper.findComponent(VInputNumber);

    expect(input.classes()).toContain('v-input-number--disabled');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VInputNumber
        v-model={DEMO_MODEL.value}
        size={SizeList.mini}
        sizeXs={SizeList.small}
        sizeSm={SizeList.medium}
        sizeMd={SizeList.large}
        sizeLg={SizeList.big}
        sizeXl={SizeList.huge}
        sizeXxl={SizeList.massive}
      />
    ));

    expect(wrapper.classes()).toContain('v-input-number--size-mini');
    expect(wrapper.classes()).toContain('v-input-number--size-xs-small');
    expect(wrapper.classes()).toContain('v-input-number--size-sm-medium');
    expect(wrapper.classes()).toContain('v-input-number--size-md-large');
    expect(wrapper.classes()).toContain('v-input-number--size-lg-big');
    expect(wrapper.classes()).toContain('v-input-number--size-xl-huge');
    expect(wrapper.classes()).toContain('v-input-number--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VInputNumber
        v-model={DEMO_MODEL.value}
        theme={ThemeList.primary}
      />
    ));

    expect(wrapper.classes()).toContain('v-input-number--theme-primary');
  });
});
