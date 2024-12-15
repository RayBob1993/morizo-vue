import { SizeList, ThemeList } from '../../../enums';
import { VSpinner } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VSpinner.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VSpinner/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-spinner');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VSpinner size={SizeList.mini}/>
    ));

    expect(wrapper.classes()).toContain('v-spinner--size-mini');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VSpinner theme={ThemeList.primary}/>
    ));

    expect(wrapper.classes()).toContain('v-spinner--theme-primary');
  });
});
