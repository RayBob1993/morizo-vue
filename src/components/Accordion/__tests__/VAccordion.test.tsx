import { SizeList, ThemeList } from '../../../enums';
import { VAccordion, VAccordionItem } from '../';
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VAccordion.vue', () => {
  const DEMO_MODEL = ref('');

  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VAccordion v-model={DEMO_MODEL.value}>
        <VAccordionItem value={1}/>
        <VAccordionItem value={2}/>
        <VAccordionItem value={3}/>
      </VAccordion>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-accordion');
    expect(wrapper.find('.v-accordion-item')).toBeTruthy();
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VAccordion
        v-model={DEMO_MODEL.value}
        size={SizeList.mini}
        sizeXs={SizeList.small}
        sizeSm={SizeList.medium}
        sizeMd={SizeList.large}
        sizeLg={SizeList.big}
        sizeXl={SizeList.huge}
        sizeXxl={SizeList.massive}
      >
        <VAccordionItem value={1}/>
        <VAccordionItem value={2}/>
        <VAccordionItem value={3}/>
      </VAccordion>
    ));

    expect(wrapper.find('.v-accordion').classes()).toContain('v-accordion--size-mini');
    expect(wrapper.find('.v-accordion').classes()).toContain('v-accordion--size-xs-small');
    expect(wrapper.find('.v-accordion').classes()).toContain('v-accordion--size-sm-medium');
    expect(wrapper.find('.v-accordion').classes()).toContain('v-accordion--size-md-large');
    expect(wrapper.find('.v-accordion').classes()).toContain('v-accordion--size-lg-big');
    expect(wrapper.find('.v-accordion').classes()).toContain('v-accordion--size-xl-huge');
    expect(wrapper.find('.v-accordion').classes()).toContain('v-accordion--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VAccordion
        v-model={DEMO_MODEL.value}
        theme={ThemeList.primary}
      >
        <VAccordionItem value={1}/>
        <VAccordionItem value={2}/>
        <VAccordionItem value={3}/>
      </VAccordion>
    ));

    expect(wrapper.find('.v-accordion').classes()).toContain('v-accordion--theme-primary');
  });
});
