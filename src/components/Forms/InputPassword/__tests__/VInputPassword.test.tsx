import { SizeList, ThemeList } from '../../../../enums';
import { VInputPassword } from '../';
import { VForm } from '../../Form';
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

const DEMO_MODEL = ref('123456');

describe('VInputPassword.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VInputPassword v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-input-password');
  });

  it('Проверка видимости пароля', async () => {
    const wrapper = mount(() => (
      <VInputPassword v-model={DEMO_MODEL.value}/>
    ));

    const input = wrapper.find('input');
    const buttonTogglePassword = wrapper.find('button');

    await buttonTogglePassword.trigger('click');
    expect(input.attributes().type).toEqual('text');
  });

  it('Проверка v-model', () => {
    const wrapper = mount(() => (
      <VInputPassword v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.find('input').element.value).toEqual(DEMO_MODEL.value);
  });

  it('Проверка на блокировку', () => {
    const wrapper = mount(() => (
      <VInputPassword
        v-model={DEMO_MODEL.value}
        disabled={true}
      />
    ));

    expect(wrapper.classes()).toContain('v-input--disabled');
  });

  it('Проверка на блокировку через VForm', () => {
    const wrapper = mount(() => (
      <VForm
        modelValue={{}}
        disabled={true}
      >
        <VInputPassword v-model={DEMO_MODEL.value}/>
      </VForm>
    ));

    const input = wrapper.findComponent(VInputPassword);

    expect(input.classes()).toContain('v-input--disabled');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VInputPassword
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

    expect(wrapper.classes()).toContain('v-input--size-mini');
    expect(wrapper.classes()).toContain('v-input--size-xs-small');
    expect(wrapper.classes()).toContain('v-input--size-sm-medium');
    expect(wrapper.classes()).toContain('v-input--size-md-large');
    expect(wrapper.classes()).toContain('v-input--size-lg-big');
    expect(wrapper.classes()).toContain('v-input--size-xl-huge');
    expect(wrapper.classes()).toContain('v-input--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VInputPassword
        v-model={DEMO_MODEL.value}
        theme={ThemeList.primary}
      />
    ));

    expect(wrapper.classes()).toContain('v-input--theme-primary');
  });
});
