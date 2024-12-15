import { VSection } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

const DEMO_TEXT = 'Секция';

describe('VSection.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VSection>
        {DEMO_TEXT}
      </VSection>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-section');
    expect(wrapper.text()).toEqual(DEMO_TEXT);
  });

  it('Проверка на заголовок', () => {
    const sectionTitle = 'Заголовок секции';

    const wrapper = mount(() => (
      <VSection title={sectionTitle}/>
    ));

    expect(wrapper.text()).toContain(sectionTitle);
  });

  it('Проверка слотов', () => {
    const bodyContent = (<div class="body-content"/>);
    const footerContent = (<div class="footer-content"/>);

    const wrapper = mount(() => (
      <VSection
        v-slots={{
          body: () => bodyContent,
          footer: () => footerContent
        }}
      />
    ));

    expect(wrapper.find('.body-content').exists()).toBe(true);
    expect(wrapper.find('.footer-content').exists()).toBe(true);
  });
});
