import { SizeList, ThemeList } from '../../../enums';
import { VLink } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VLink.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VLink url="/"/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-link');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VLink
        size={SizeList.mini}
        url="/"
      />
    ));

    expect(wrapper.classes()).toContain('v-link--size-mini');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VLink
        theme={ThemeList.primary}
        url="/"
      />
    ));

    expect(wrapper.classes()).toContain('v-link--theme-primary');
  });
});
