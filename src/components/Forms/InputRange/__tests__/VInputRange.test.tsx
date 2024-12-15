import type { IVRangeValue, IVRangeFormat } from '../types';
import { SizeList, ThemeList } from '../../../../enums';
import { VInputRange } from '../';
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

const DEMO_MODEL = ref<IVRangeValue>({
  min: 0,
  max: 100500
});

const DEMO_FORMAT: IVRangeFormat = {
  prefixFrom: 'от ',
  prefixTo: 'до ',
  suffix: '₽'
};

describe('VInputRange.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VInputRange v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-input-range');
  });

  it('Проверка v-model', () => {
    const wrapper = mount(() => (
      <VInputRange
        v-model={DEMO_MODEL.value}
        format={DEMO_FORMAT}
      />
    ));

    const inputMin = wrapper.find<HTMLInputElement>('.v-input-range__input-native--min').element;
    const inputMax = wrapper.find<HTMLInputElement>('.v-input-range__input-native--max').element;

    expect(inputMin.value).toEqual(`${DEMO_FORMAT.prefixFrom}${DEMO_MODEL.value.min}${DEMO_FORMAT.suffix}`);
    expect(inputMax.value).toEqual(`${DEMO_FORMAT.prefixTo}${DEMO_MODEL.value.max}${DEMO_FORMAT.suffix}`);
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VInputRange
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

    expect(wrapper.classes()).toContain('v-input-range--size-mini');
    expect(wrapper.classes()).toContain('v-input-range--size-xs-small');
    expect(wrapper.classes()).toContain('v-input-range--size-sm-medium');
    expect(wrapper.classes()).toContain('v-input-range--size-md-large');
    expect(wrapper.classes()).toContain('v-input-range--size-lg-big');
    expect(wrapper.classes()).toContain('v-input-range--size-xl-huge');
    expect(wrapper.classes()).toContain('v-input-range--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VInputRange
        v-model={DEMO_MODEL.value}
        theme={ThemeList.primary}
      />
    ));

    expect(wrapper.classes()).toContain('v-input-range--theme-primary');
  });
});
