import { SizeList, ThemeList } from '../../../enums';
import { VBadge } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VBadge.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VBadge/>
    ));

    expect(wrapper.exists()).toBeTruthy();
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VBadge
        size={SizeList.mini}
        sizeXs={SizeList.small}
        sizeSm={SizeList.medium}
        sizeMd={SizeList.large}
        sizeLg={SizeList.big}
        sizeXl={SizeList.huge}
        sizeXxl={SizeList.massive}
      />
    ));

    expect(wrapper.classes()).toContain('v-badge--size-mini');
    expect(wrapper.classes()).toContain('v-badge--size-xs-small');
    expect(wrapper.classes()).toContain('v-badge--size-sm-medium');
    expect(wrapper.classes()).toContain('v-badge--size-md-large');
    expect(wrapper.classes()).toContain('v-badge--size-lg-big');
    expect(wrapper.classes()).toContain('v-badge--size-xl-huge');
    expect(wrapper.classes()).toContain('v-badge--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VBadge theme={ThemeList.primary}/>
    ));

    expect(wrapper.classes()).toContain('v-badge--theme-primary');
  });
});
