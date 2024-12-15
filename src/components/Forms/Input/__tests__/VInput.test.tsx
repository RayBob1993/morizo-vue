import { InputTypesList, SizeList, ThemeList } from '../../../../enums';
import { VInput } from '../';
import { VForm } from '../../Form';
import { ref } from 'vue';
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VInput.vue', () => {
  const DEMO_MODEL = ref('Содержимое поля ввода');

  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VInput v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-input');
  });

  it('Проверка v-model', () => {
    const wrapper = mount(() => (
      <VInput v-model={DEMO_MODEL.value}/>
    ));

    expect(wrapper.find('input').element.value).toEqual(DEMO_MODEL.value);
  });

  it('Проверка событий', async () => {
    const handleInput = vi.fn();
    const handleChange = vi.fn();
    const handleKeydown = vi.fn();
    const handleFocusin = vi.fn();
    const handleFocusout = vi.fn();

    const wrapper = mount(() => (
      <VInput
        v-model={DEMO_MODEL.value}
        onChange={handleChange}
        onInput={handleInput}
        onKeydown={handleKeydown}
        onFocusin={handleFocusin}
        onFocusout={handleFocusout}
      />
    ));

    const input = wrapper.find('input');

    await Promise.all([
      input.trigger('input'),
      input.trigger('change'),
      input.trigger('keydown'),
      input.trigger('focusin'),
      input.trigger('focusout')
    ]);

    expect(handleInput).toBeCalledTimes(1);
    expect(handleChange).toBeCalledTimes(1);
    expect(handleKeydown).toBeCalledTimes(1);
    expect(handleFocusin).toBeCalledTimes(1);
    expect(handleFocusout).toBeCalledTimes(1);
  });

  it('Проверка на тип', () => {
    const wrapperInput = mount(() => (
      <VInput
        v-model={DEMO_MODEL.value}
        type={InputTypesList.input}
      />
    ));

    const wrapperTextarea = mount(() => (
      <VInput
        v-model={DEMO_MODEL.value}
        type={InputTypesList.textarea}
      />
    ));

    expect(wrapperInput.classes('v-input--textarea')).toBe(false);
    expect(wrapperTextarea.classes('v-input--textarea')).toBe(true);
  });

  it('Проверка на блокировку', () => {
    const wrapper = mount(() => (
      <VInput
        v-model={DEMO_MODEL.value}
        disabled={true}
      />
    ));

    expect(wrapper.classes()).toContain('v-input--disabled');
  });

  it('Проверка на блокировку через VForm', () => {
    const formModel = ref({});

    const wrapper = mount(() => (
      <VForm
        v-model={formModel.value}
        disabled={true}
      >
        <VInput v-model={DEMO_MODEL.value}/>
      </VForm>
    ));

    const input = wrapper.findComponent(VInput);

    expect(input.classes()).toContain('v-input--disabled');
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VInput
        v-model={DEMO_MODEL.value}
        size={SizeList.mini}
        sizeXs={SizeList.small}
        sizeSm={SizeList.medium}
        sizeMd={SizeList.large}
        sizeLg={SizeList.big}
        sizeXl={SizeList.huge}
        sizeXxl={SizeList.massive}
      />
    ));

    expect(wrapper.classes()).toContain('v-input--size-mini');
    expect(wrapper.classes()).toContain('v-input--size-xs-small');
    expect(wrapper.classes()).toContain('v-input--size-sm-medium');
    expect(wrapper.classes()).toContain('v-input--size-md-large');
    expect(wrapper.classes()).toContain('v-input--size-lg-big');
    expect(wrapper.classes()).toContain('v-input--size-xl-huge');
    expect(wrapper.classes()).toContain('v-input--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VInput
        v-model={DEMO_MODEL.value}
        theme={ThemeList.primary}
      />
    ));

    expect(wrapper.classes()).toContain('v-input--theme-primary');
  });
});
