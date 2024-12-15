import { SizeList, ThemeList } from '../../../enums';
import { VButton } from '../';
import { VSpinner } from '../../Spinner';
import { VForm } from '../../Forms';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';

describe('VButton.vue', () => {
  const DEMO_TEXT = 'Кнопка';

  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VButton>
        {DEMO_TEXT}
      </VButton>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.attributes().type).toEqual('button');
    expect(wrapper.classes()).toContain('v-button');
    expect(wrapper.text()).toEqual(DEMO_TEXT);
  });

  it('Проверка на загрузку', async () => {
    const wrapper = mount(() => (
      <VButton loading={true}/>
    ));

    expect(wrapper.classes()).toContain('v-button--loading');
    expect(wrapper.findComponent(VSpinner).exists()).toBeTruthy();

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('Проверка на прозрачный стиль с рамкой', () => {
    const wrapper = mount(() => (
      <VButton plain={true}/>
    ));

    expect(wrapper.classes()).toContain('v-button--plain');
  });

  it('Проверка на широкую кнопку', () => {
    const wrapper = mount(() => (
      <VButton wide={true}/>
    ));

    expect(wrapper.classes()).toContain('v-button--wide');
  });

  it('Проверка на блокировку', async () => {
    const wrapper = mount(() => (
      <VButton disabled={true}/>
    ));

    expect(wrapper.classes()).toContain('v-button--disabled');

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('Проверка на блокировку через VForm', async () => {
    const model = ref({});

    const wrapper = mount(() => (
      <VForm
        v-model={model.value}
        disabled={true}
      >
        <VButton/>
      </VForm>
    ));

    const btn = wrapper.findComponent(VButton);

    expect(btn.classes()).toContain('v-button');
    expect(btn.classes()).toContain('v-button--disabled');
    await btn.trigger('click');
    expect(btn.emitted('click')).toBeUndefined();
  });

  it('Проверка на размер', () => {
    const wrapper = mount(() => (
      <VButton
        size={SizeList.mini}
        sizeXs={SizeList.small}
        sizeSm={SizeList.medium}
        sizeMd={SizeList.large}
        sizeLg={SizeList.big}
        sizeXl={SizeList.huge}
        sizeXxl={SizeList.massive}
      />
    ));

    expect(wrapper.classes()).toContain('v-button--size-mini');
    expect(wrapper.classes()).toContain('v-button--size-xs-small');
    expect(wrapper.classes()).toContain('v-button--size-sm-medium');
    expect(wrapper.classes()).toContain('v-button--size-md-large');
    expect(wrapper.classes()).toContain('v-button--size-lg-big');
    expect(wrapper.classes()).toContain('v-button--size-xl-huge');
    expect(wrapper.classes()).toContain('v-button--size-xxl-massive');
  });

  it('Проверка на тему', () => {
    const wrapper = mount(() => (
      <VButton theme={ThemeList.primary}/>
    ));

    expect(wrapper.classes()).toContain('v-button--theme-primary');
  });
});
