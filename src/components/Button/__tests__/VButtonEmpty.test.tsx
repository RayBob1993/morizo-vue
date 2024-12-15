import { VButtonEmpty } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

const DEMO_TEXT = 'Кнопка';

describe('VButtonEmpty.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VButtonEmpty>
        {DEMO_TEXT}
      </VButtonEmpty>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.attributes().type).toEqual('button');
    expect(wrapper.classes()).toContain('v-button-empty');
    expect(wrapper.text()).toEqual(DEMO_TEXT);
  });
});
