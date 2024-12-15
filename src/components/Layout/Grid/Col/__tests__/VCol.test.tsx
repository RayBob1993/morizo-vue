import { VCol } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VCol.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VCol/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-col');
  });

  it('Проверка размера', () => {
    const wrapper = mount(() => (
      <VCol size={12}/>
    ));

    expect(wrapper.classes()).toContain('v-col--size-12');
  });

  it('Проверка адаптивности', () => {
    const wrapper = mount(() => (
      <VCol
        size={12}
        sizeXs={6}
        sizeSm={8}
        sizeMd={4}
        sizeLg={12}
        sizeXl={8}
        sizeXxl={12}
      />
    ));

    expect(wrapper.classes()).toContain('v-col--size-12');
    expect(wrapper.classes()).toContain('v-col--size-xs-6');
    expect(wrapper.classes()).toContain('v-col--size-sm-8');
    expect(wrapper.classes()).toContain('v-col--size-md-4');
    expect(wrapper.classes()).toContain('v-col--size-lg-12');
    expect(wrapper.classes()).toContain('v-col--size-xl-8');
    expect(wrapper.classes()).toContain('v-col--size-xxl-12');
  });

  it('Проверка смещения вправо', () => {
    const wrapper = mount(() => (
      <VCol
        offset={12}
        offsetXs={6}
        offsetSm={8}
        offsetMd={4}
        offsetLg={12}
        offsetXl={8}
        offsetXxl={12}
      />
    ));

    expect(wrapper.classes()).toContain('v-col--offset-12');
    expect(wrapper.classes()).toContain('v-col--offset-xs-6');
    expect(wrapper.classes()).toContain('v-col--offset-sm-8');
    expect(wrapper.classes()).toContain('v-col--offset-md-4');
    expect(wrapper.classes()).toContain('v-col--offset-lg-12');
    expect(wrapper.classes()).toContain('v-col--offset-xl-8');
    expect(wrapper.classes()).toContain('v-col--offset-xxl-12');
  });

  it('Проверка сортировки', () => {
    const wrapper = mount(() => (
      <VCol
        order={12}
        orderXs={6}
        orderSm={8}
        orderMd={4}
        orderLg={12}
        orderXl={8}
        orderXxl={12}
      />
    ));

    expect(wrapper.classes()).toContain('v-col--order-12');
    expect(wrapper.classes()).toContain('v-col--order-xs-6');
    expect(wrapper.classes()).toContain('v-col--order-sm-8');
    expect(wrapper.classes()).toContain('v-col--order-md-4');
    expect(wrapper.classes()).toContain('v-col--order-lg-12');
    expect(wrapper.classes()).toContain('v-col--order-xl-8');
    expect(wrapper.classes()).toContain('v-col--order-xxl-12');
  });
});
