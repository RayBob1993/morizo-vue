import { SizeList, ThemeList } from '../../../../enums';
import { VSelect, VOption } from '../';
import { VForm } from '../../Form';
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VSelect.vue', () => {
  const DEMO_MODEL = ref(1);

  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VSelect v-model={DEMO_MODEL.value}>
        <VOption value={1}/>
        <VOption value={2}/>
        <VOption value={3}/>
        <VOption value={4}/>
      </VSelect>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-select');
    expect(wrapper.find('.v-option')).toBeTruthy();
  });

  it('Проверка на блокировку', () => {
    const wrapper = mount(() => (
      <VSelect
        v-model={DEMO_MODEL.value}
        disabled={true}
      >
        <VOption value={1}/>
        <VOption value={2}/>
        <VOption value={3}/>
        <VOption value={4}/>
      </VSelect>
    ));

    expect(wrapper.classes()).toContain('v-select--disabled');
  });

  it('Проверка на блокировку через VForm', () => {
    const formModel = ref({});

    const wrapper = mount(() => (
      <VForm
        v-model={formModel.value}
        disabled={true}
      >
        <VSelect v-model={DEMO_MODEL.value}>
          <VOption value={1}/>
          <VOption value={2}/>
          <VOption value={3}/>
          <VOption value={4}/>
        </VSelect>
      </VForm>
    ));

    const select = wrapper.findComponent(VSelect);

    expect(select.classes()).toContain('v-select--disabled');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VSelect
        v-model={DEMO_MODEL.value}
        size={SizeList.mini}
        sizeXs={SizeList.small}
        sizeSm={SizeList.medium}
        sizeMd={SizeList.large}
        sizeLg={SizeList.big}
        sizeXl={SizeList.huge}
        sizeXxl={SizeList.massive}
      >
        <VOption value={1}/>
        <VOption value={2}/>
        <VOption value={3}/>
        <VOption value={4}/>
      </VSelect>
    ));

    expect(wrapper.classes()).toContain('v-select--size-mini');
    expect(wrapper.classes()).toContain('v-select--size-xs-small');
    expect(wrapper.classes()).toContain('v-select--size-sm-medium');
    expect(wrapper.classes()).toContain('v-select--size-md-large');
    expect(wrapper.classes()).toContain('v-select--size-lg-big');
    expect(wrapper.classes()).toContain('v-select--size-xl-huge');
    expect(wrapper.classes()).toContain('v-select--size-xxl-massive');

    expect(wrapper.find('.v-option').classes()).toContain('v-option--size-mini');
    expect(wrapper.find('.v-option').classes()).toContain('v-option--size-xs-small');
    expect(wrapper.find('.v-option').classes()).toContain('v-option--size-sm-medium');
    expect(wrapper.find('.v-option').classes()).toContain('v-option--size-md-large');
    expect(wrapper.find('.v-option').classes()).toContain('v-option--size-lg-big');
    expect(wrapper.find('.v-option').classes()).toContain('v-option--size-xl-huge');
    expect(wrapper.find('.v-option').classes()).toContain('v-option--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VSelect
        v-model={DEMO_MODEL.value}
        theme={ThemeList.primary}
      >
        <VOption value={1}/>
        <VOption value={2}/>
        <VOption value={3}/>
        <VOption value={4}/>
      </VSelect>
    ));

    expect(wrapper.classes()).toContain('v-select--theme-primary');
    expect(wrapper.find('.v-option').classes()).toContain('v-option--theme-primary');
  });
});
