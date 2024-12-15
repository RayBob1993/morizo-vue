import { SizeList, ThemeList } from '../../../enums';
import { VPrice } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VPrice.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VPrice price={1000}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-price');
    expect(wrapper.classes()).toContain('v-price--normal');
    expect(wrapper.text()).toEqual('1 000 ₽');
  });

  it('Проверка старой цены', () => {
    const wrapper = mount(() => (
      <VPrice
        price={1000}
        old={true}
      />
    ));

    expect(wrapper.classes()).toContain('v-price--old');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VPrice
        price={1000}
        size={SizeList.mini}
      />
    ));

    expect(wrapper.classes()).toContain('v-price--size-mini');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VPrice
        price={1000}
        theme={ThemeList.primary}
      />
    ));

    expect(wrapper.classes()).toContain('v-price--theme-primary');
  });
});
