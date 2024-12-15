import { SizeList, ThemeList } from '../../../enums';
import { VIcon } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VIcon.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VIcon icon="mail"/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-icon');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VIcon
        icon="mail"
        size={SizeList.mini}
        sizeXs={SizeList.small}
        sizeSm={SizeList.medium}
        sizeMd={SizeList.large}
        sizeLg={SizeList.big}
        sizeXl={SizeList.huge}
        sizeXxl={SizeList.massive}
      />
    ));

    expect(wrapper.classes()).toContain('v-icon--size-mini');
    expect(wrapper.classes()).toContain('v-icon--size-xs-small');
    expect(wrapper.classes()).toContain('v-icon--size-sm-medium');
    expect(wrapper.classes()).toContain('v-icon--size-md-large');
    expect(wrapper.classes()).toContain('v-icon--size-lg-big');
    expect(wrapper.classes()).toContain('v-icon--size-xl-huge');
    expect(wrapper.classes()).toContain('v-icon--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VIcon
        icon="mail"
        theme={ThemeList.primary}
      />
    ));

    expect(wrapper.classes()).toContain('v-icon--theme-primary');
  });
});
