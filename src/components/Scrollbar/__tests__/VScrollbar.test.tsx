import { SizeList, ThemeList } from '../../../enums';
import { VScrollbar } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

const DEMO_TEXT = 'Скроллбар';

describe('VScrollbar.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VScrollbar>
        {DEMO_TEXT}
      </VScrollbar>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-scrollbar');
    expect(wrapper.text()).toEqual(DEMO_TEXT);
  });

  it('Проверка вертикального скролла', () => {
    const wrapper = mount(() => (
      <VScrollbar vertical={true}/>
    ));

    expect(wrapper.classes()).toContain('v-scrollbar--vertical');
  });

  it('Проверка горизонтального скролла', () => {
    const wrapper = mount(() => (
      <VScrollbar horizontal={true}/>
    ));

    expect(wrapper.classes()).toContain('v-scrollbar--horizontal');
  });

  it('Проверка скролла через перетаскивание', () => {
    const wrapper = mount(() => (
      <VScrollbar draggable={true}/>
    ));

    expect(wrapper.classes()).toContain('v-scrollbar--draggable');
  });

  it('Проверка визуального скрытия скроллбара', () => {
    const wrapper = mount(() => (
      <VScrollbar hidden={true}/>
    ));

    expect(wrapper.classes()).toContain('v-scrollbar--hidden');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VScrollbar size={SizeList.mini}/>
    ));

    expect(wrapper.classes()).toContain('v-scrollbar--size-mini');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VScrollbar theme={ThemeList.primary}/>
    ));

    expect(wrapper.classes()).toContain('v-scrollbar--theme-primary');
  });

  it('Проверка слотов', () => {
    const wrapper = mount(() => (
      <VScrollbar>
        <div class="scroll-content"/>
      </VScrollbar>
    ));

    expect(wrapper.find('.scroll-content').exists()).toBe(true);
  });
});
