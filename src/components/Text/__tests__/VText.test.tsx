import { SizeList, ThemeList } from '../../../enums';
import { VText } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VText.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VText/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-text');
  });

  it('Проверка на weight', () => {
    const wrapper = mount(() => (
      <VText weight="300"/>
    ));

    expect(wrapper.classes()).toContain('v-text--weight-300');
  });

  it('Проверка на align', () => {
    const wrapper = mount(() => (
      <VText align="center"/>
    ));

    expect(wrapper.classes()).toContain('v-text--align-center');
  });

  it('Проверка на uppercase', () => {
    const wrapper = mount(() => (
      <VText uppercase={true}/>
    ));

    expect(wrapper.classes()).toContain('v-text--uppercase');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VText
        size={SizeList.mini}
        sizeXs={SizeList.small}
        sizeSm={SizeList.medium}
        sizeMd={SizeList.large}
        sizeLg={SizeList.big}
        sizeXl={SizeList.huge}
        sizeXxl={SizeList.massive}
      />
    ));

    expect(wrapper.classes()).toContain('v-text--size-mini');
    expect(wrapper.classes()).toContain('v-text--size-xs-small');
    expect(wrapper.classes()).toContain('v-text--size-sm-medium');
    expect(wrapper.classes()).toContain('v-text--size-md-large');
    expect(wrapper.classes()).toContain('v-text--size-lg-big');
    expect(wrapper.classes()).toContain('v-text--size-xl-huge');
    expect(wrapper.classes()).toContain('v-text--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VText theme={ThemeList.primary}/>
    ));

    expect(wrapper.classes()).toContain('v-text--theme-primary');
  });
});
