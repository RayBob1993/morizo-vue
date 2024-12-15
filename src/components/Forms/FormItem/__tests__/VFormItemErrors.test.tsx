import type { IVFormItemErrorsProps } from '../types';
import VFormItemErrors from '../VFormItemErrors.vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

const mockErrors: IVFormItemErrorsProps['errors'] = [
  {
    message: 'Ошибка валидации'
  }
];

describe('VFormItemErrors.vue', () => {
  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VFormItemErrors errors={mockErrors}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-form-item-errors');
    expect(wrapper.html()).toContain('v-form-item-errors__item');
  });
});
