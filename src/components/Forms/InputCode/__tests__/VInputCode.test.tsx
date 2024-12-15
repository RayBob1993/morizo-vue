import { SizeList, ThemeList } from '../../../../enums';
import { VInputCode } from '../';
import { VForm } from '../../Form';
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VInputCode.vue', () => {
  const DEMO_MODEL = ref('1234');

  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VInputCode v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-input-code');
  });

  it('Проверка на блокировку', () => {
    const wrapper = mount(() => (
      <VInputCode
        v-model={DEMO_MODEL.value}
        disabled={true}
      />
    ));

    expect(wrapper.classes()).toContain('v-input-code--disabled');
  });

  it('Проверка на блокировку через VForm', () => {
    const formModel = ref({});

    const wrapper = mount(() => (
      <VForm
        v-model={formModel.value}
        disabled={true}
      >
        <VInputCode v-model={DEMO_MODEL.value}/>
      </VForm>
    ));

    const input = wrapper.findComponent(VInputCode);

    expect(input.classes()).toContain('v-input-code--disabled');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VInputCode
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

    expect(wrapper.classes()).toContain('v-input-code--size-mini');
    expect(wrapper.classes()).toContain('v-input-code--size-xs-small');
    expect(wrapper.classes()).toContain('v-input-code--size-sm-medium');
    expect(wrapper.classes()).toContain('v-input-code--size-md-large');
    expect(wrapper.classes()).toContain('v-input-code--size-lg-big');
    expect(wrapper.classes()).toContain('v-input-code--size-xl-huge');
    expect(wrapper.classes()).toContain('v-input-code--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VInputCode
        v-model={DEMO_MODEL.value}
        theme={ThemeList.primary}
      />
    ));

    expect(wrapper.classes()).toContain('v-input-code--theme-primary');
  });
});
