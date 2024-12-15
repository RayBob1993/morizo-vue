import { SizeList, ThemeList } from '../../../../enums';
import { VInputFile } from '../';
import { VForm } from '../../Form';
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

const DEMO_MODEL = ref([]);

describe('VInputFile.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VInputFile v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-input-file');
  });

  it('Проверка на блокировку', () => {
    const wrapper = mount(() => (
      <VInputFile
        v-model={DEMO_MODEL.value}
        disabled={true}
      />
    ));

    expect(wrapper.classes()).toContain('v-input-file--disabled');
  });

  it('Проверка на блокировку через VForm', () => {
    const wrapper = mount(() => (
      <VForm
        modelValue={{}}
        disabled={true}
      >
        <VInputFile v-model={DEMO_MODEL.value}/>
      </VForm>
    ));

    const input = wrapper.findComponent(VInputFile);

    expect(input.classes()).toContain('v-input-file--disabled');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VInputFile
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

    expect(wrapper.classes()).toContain('v-input-file--size-mini');
    expect(wrapper.classes()).toContain('v-input-file--size-xs-small');
    expect(wrapper.classes()).toContain('v-input-file--size-sm-medium');
    expect(wrapper.classes()).toContain('v-input-file--size-md-large');
    expect(wrapper.classes()).toContain('v-input-file--size-lg-big');
    expect(wrapper.classes()).toContain('v-input-file--size-xl-huge');
    expect(wrapper.classes()).toContain('v-input-file--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VInputFile
        v-model={DEMO_MODEL.value}
        theme={ThemeList.primary}
      />
    ));

    expect(wrapper.classes()).toContain('v-input-file--theme-primary');
  });
});
