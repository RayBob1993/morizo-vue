import { SizeList, ThemeList } from '../../../enums';
import { VDropdown, VDropdownMenuItem } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VDropdown.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VDropdown>
        <VDropdownMenuItem/>
        <VDropdownMenuItem/>
        <VDropdownMenuItem/>
        <VDropdownMenuItem/>
      </VDropdown>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('.v-dropdown')).toBeTruthy();
    expect(wrapper.find('.v-dropdown-menu-item')).toBeTruthy();
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VDropdown
        size={SizeList.mini}
        sizeXs={SizeList.small}
        sizeSm={SizeList.medium}
        sizeMd={SizeList.large}
        sizeLg={SizeList.big}
        sizeXl={SizeList.huge}
        sizeXxl={SizeList.massive}
      >
        <VDropdownMenuItem/>
        <VDropdownMenuItem/>
        <VDropdownMenuItem/>
        <VDropdownMenuItem/>
      </VDropdown>
    ));

    expect(wrapper.classes()).toContain('v-dropdown--size-mini');
    expect(wrapper.classes()).toContain('v-dropdown--size-xs-small');
    expect(wrapper.classes()).toContain('v-dropdown--size-sm-medium');
    expect(wrapper.classes()).toContain('v-dropdown--size-md-large');
    expect(wrapper.classes()).toContain('v-dropdown--size-lg-big');
    expect(wrapper.classes()).toContain('v-dropdown--size-xl-huge');
    expect(wrapper.classes()).toContain('v-dropdown--size-xxl-massive');

    expect(wrapper.find('.v-dropdown-menu-item').classes()).toContain('v-dropdown-menu-item--size-mini');
    expect(wrapper.find('.v-dropdown-menu-item').classes()).toContain('v-dropdown-menu-item--size-xs-small');
    expect(wrapper.find('.v-dropdown-menu-item').classes()).toContain('v-dropdown-menu-item--size-sm-medium');
    expect(wrapper.find('.v-dropdown-menu-item').classes()).toContain('v-dropdown-menu-item--size-md-large');
    expect(wrapper.find('.v-dropdown-menu-item').classes()).toContain('v-dropdown-menu-item--size-lg-big');
    expect(wrapper.find('.v-dropdown-menu-item').classes()).toContain('v-dropdown-menu-item--size-xl-huge');
    expect(wrapper.find('.v-dropdown-menu-item').classes()).toContain('v-dropdown-menu-item--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VDropdown theme={ThemeList.primary}>
        <VDropdownMenuItem/>
        <VDropdownMenuItem/>
        <VDropdownMenuItem/>
        <VDropdownMenuItem/>
      </VDropdown>
    ));

    expect(wrapper.classes()).toContain('v-dropdown--theme-primary');
    expect(wrapper.find('.v-dropdown-menu-item').classes()).toContain('v-dropdown-menu-item--theme-primary');
  });
});
