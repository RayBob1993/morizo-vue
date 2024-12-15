import { VRow } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VRow.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VRow/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-row');
    expect(wrapper.classes()).toContain('v-row--gutters-x');
    expect(wrapper.classes()).not.toContain('v-row--gutters-y');
  });

  it('Проверка justify', () => {
    const wrapper = mount(() => (
      <VRow
        justify="between"
        justifyXs="start"
        justifySm="center"
        justifyMd="end"
        justifyLg="baseline"
        justifyXl="stretch"
        justifyXxl="between"
      />
    ));

    expect(wrapper.classes()).toContain('v-row--justify-between');
    expect(wrapper.classes()).toContain('v-row--justify-xs-start');
    expect(wrapper.classes()).toContain('v-row--justify-sm-center');
    expect(wrapper.classes()).toContain('v-row--justify-md-end');
    expect(wrapper.classes()).toContain('v-row--justify-lg-baseline');
    expect(wrapper.classes()).toContain('v-row--justify-xl-stretch');
    expect(wrapper.classes()).toContain('v-row--justify-xxl-between');
  });

  it('Проверка align', () => {
    const wrapper = mount(() => (
      <VRow
        align="center"
        alignXs="start"
        alignSm="center"
        alignMd="end"
        alignLg="baseline"
        alignXl="stretch"
        alignXxl="center"
      />
    ));

    expect(wrapper.classes()).toContain('v-row--align-center');
    expect(wrapper.classes()).toContain('v-row--align-xs-start');
    expect(wrapper.classes()).toContain('v-row--align-sm-center');
    expect(wrapper.classes()).toContain('v-row--align-md-end');
    expect(wrapper.classes()).toContain('v-row--align-lg-baseline');
    expect(wrapper.classes()).toContain('v-row--align-xl-stretch');
    expect(wrapper.classes()).toContain('v-row--align-xxl-center');
  });

  it('Отключение gutters-x', () => {
    const wrapper = mount(() => (
      <VRow guttersX={false}/>
    ));

    expect(wrapper.classes()).not.toContain('v-row--gutters-x');
  });

  it('Добавление gutters-y', () => {
    const wrapper = mount(() => (
      <VRow guttersY={true}/>
    ));

    expect(wrapper.classes()).toContain('v-row--gutters-y');
  });

  it('Проверка переноса дочерних блоков', () => {
    const wrapper = mount(() => (
      <VRow wrap={false}/>
    ));

    expect(wrapper.classes()).toContain('v-row--no-wrap');
  });
});
