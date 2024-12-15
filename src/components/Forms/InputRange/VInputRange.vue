<template>
  <div
    class="v-input-range"
    :class="{
      ...classList,
      [`v-input-range--theme-${theme}`]: theme
    }"
  >
    <div class="v-input-range__input">
      <input
        v-model="localInputValue.min"
        class="v-input-range__input-native v-input-range__input-native--min"
        :disabled="isDisabled"
        type="text"
        @input="onInputMin"
      >

      <input
        v-model="localInputValue.max"
        class="v-input-range__input-native v-input-range__input-native--max"
        :disabled="isDisabled"
        type="text"
        @input="onInputMax"
      >
    </div>

    <div
      ref="noUiSliderElement"
      class="v-input-range__slider"
    />
  </div>
</template>

<script lang="ts" setup>
  import type { API } from 'nouislider';
  import type { IVRangeValue, IVInputRangeProps, IVRangeFormat, IVRangeEmits } from './types';
  import type { IVFormItemField } from '../FormItem/types';
  import { useForm, useBreakpointsProp } from '../../../composables';
  import { useTemplateRef, ref, computed, onMounted, onUnmounted, onBeforeUnmount, watch, shallowRef } from 'vue';

  const props = withDefaults(defineProps<IVInputRangeProps>(), {
    min: 0,
    max: 0,
    step: 1,
    format: (): IVRangeFormat => ({
      prefixFrom: 'от ',
      prefixTo: 'до ',
      suffix: '₽'
    })
  });

  const emit = defineEmits<IVRangeEmits>();

  const modelValue = defineModel<IVRangeValue>({
    required: true
  });

  const { FormItem, isFormDisabled } = useForm();
  const { classList } = useBreakpointsProp('v-input-range', 'size', props);

  const noUiSliderElement = useTemplateRef<API['target']>('noUiSliderElement');
  const noUiSliderInstance = shallowRef<API>();

  const localInputValue = ref({
    min: '0',
    max: '0'
  });

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);

  async function onInit () {
    const noUiSlider = (await import('nouislider')).default;

    if (!noUiSliderElement.value) {
      return;
    }

    noUiSliderInstance.value = noUiSlider.create(noUiSliderElement.value, {
      start: [
        modelValue.value?.min || props.min,
        modelValue.value?.max || props.max
      ],
      connect: true,
      step: props.step,
      range: {
        min: props.min,
        max: props.max
      }
    });

    if (!noUiSliderInstance.value) {
      return;
    }

    noUiSliderInstance.value?.on('change', () => {
      const [min, max] = getValue();

      modelValue.value.min = min;
      modelValue.value.max = max;

      emit('change', modelValue.value);
    });

    noUiSliderInstance.value?.on('update', () => {
      const [min, max] = getValue();

      setFormattedLocalValue({
        min,
        max
      });
    });
  }

  function setFormattedLocalValue (payload: IVRangeValue) {
    localInputValue.value.min = `${props.format.prefixFrom}${payload.min}${props.format.suffix}`;
    localInputValue.value.max = `${props.format.prefixTo}${payload.max}${props.format.suffix}`;
  }

  function getValue () {
    const value = noUiSliderInstance.value?.get();

    return Array.isArray(value)
      ? value.map(Number)
      : [0, 0];
  }

  function onDestroy () {
    noUiSliderInstance.value?.destroy();
    noUiSliderInstance.value = undefined;
  }

  function reset () {
    noUiSliderInstance.value?.reset();
  }

  function onInputMin (event: Event) {
    const { value } = event.target as HTMLInputElement;

    if (props.format?.suffix && props.format?.prefixFrom) {
      modelValue.value.min = Number(
        value
          .replace(props.format.suffix, '')
          .replace(props.format.prefixFrom, '')
      );
    } else {
      modelValue.value.min = Number(value);
    }

    emit('change', modelValue.value);
  }

  function onInputMax (event: Event) {
    const { value } = event.target as HTMLInputElement;

    if (props.format?.suffix && props.format?.prefixTo) {
      modelValue.value.max = Number(
        value
          .replace(props.format.suffix, '')
          .replace(props.format.prefixTo, '')
      );
    } else {
      modelValue.value.min = Number(value);
    }

    emit('change', modelValue.value);
  }

  onMounted(async () => {
    await onInit();
  });

  onBeforeUnmount(() => {
    onDestroy();
  });

  watch(modelValue.value, value => {
    const { min, max } = value;

    if ((min && min > 0) && (max && max > 0)) {
      noUiSliderInstance.value?.set([
        min,
        max
      ]);

      setFormattedLocalValue({
        min,
        max
      });
    } else {
      noUiSliderInstance.value?.set([
        props.min,
        props.max
      ]);

      setFormattedLocalValue({
        min: props.min,
        max: props.max
      });
    }
  });

  setFormattedLocalValue(modelValue.value);

  FormItem?.registerField({
    reset
  });

  onUnmounted(() => {
    onDestroy();

    FormItem?.unregisterField();
  });

  defineExpose<IVFormItemField>({
    reset
  });
</script>

<style lang="scss">
  .noUi-target,
  .noUi-target * {

    @include utils-user-select(none);
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .noUi-target {
    position: relative;
  }

  .noUi-base,
  .noUi-connects {
    position: relative;
    z-index: 1;

    width: 100%;
    height: 100%;
  }

  .noUi-connects {
    z-index: 0;

    overflow: hidden;
  }

  .noUi-connect,
  .noUi-origin {
    position: absolute;
    top: 0;
    right: 0;

    transform-origin: 0 0;
    -webkit-transform-style: preserve-3d;
    transform-style: flat;
    z-index: 1;

    width: 100%;
    height: 100%;

    will-change: transform;
  }

  .noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
    right: auto;
    left: 0;
  }

  .noUi-vertical .noUi-origin {
    top: -100%;

    width: 0;
  }

  .noUi-horizontal .noUi-origin {
    height: 0;
  }

  .noUi-handle {
    position: absolute;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .noUi-touch-area {
    width: 100%;
    height: 100%;
  }

  .noUi-state-tap .noUi-connect,
  .noUi-state-tap .noUi-origin {
    transition: var(--transition-base);
  }
  .noUi-state-drag * {
    cursor: inherit !important;
  }

  .noUi-horizontal {
    height: 2px;
  }

  .noUi-horizontal .noUi-handle {
    top: -10px;
    right: -10px;

    width: 22px;
    height: 22px;
  }

  .noUi-vertical {
    width: 18px;
  }

  .noUi-vertical .noUi-handle {
    right: -10px;
    bottom: -10px;

    width: 22px;
    height: 22px;
  }

  .noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
    right: auto;
    left: -10px;
  }

  .noUi-target {
    border-radius: var(--radius-rounded);
  }

  .noUi-connects {
    border-radius: 3px;
  }

  .noUi-draggable {
    cursor: ew-resize;
  }
  .noUi-vertical .noUi-draggable {
    cursor: ns-resize;
  }

  .noUi-handle {
    border-radius: var(--radius-circle);

    cursor: default;

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      border-radius: var(--radius-circle);

      width: 10px;
      height: 10px;

      content: ''
    }
  }

  .noUi-active {
    box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;
  }

  [disabled="true"] .noUi-connect {
    background: #B8B8B8;
  }

  [disabled="true"].noUi-target,
  [disabled="true"].noUi-handle,
  [disabled="true"] .noUi-handle {
    cursor: not-allowed;
  }

  .noUi-pips {
    position: absolute;

    color: #999;
  }

  .noUi-value {
    position: absolute;
    text-align: center;

    white-space: nowrap;
  }
  .noUi-value-sub {
    color: #ccc;
    font-size: 10px;
  }

  .noUi-marker {
    position: absolute;

    background: #CCC;
  }

  .noUi-marker-sub {
    background: #AAA;
  }

  .noUi-marker-large {
    background: #AAA;
  }

  .noUi-pips-horizontal {
    top: 100%;
    left: 0;
    padding: 10px 0;

    width: 100%;
    height: 80px;
  }

  .noUi-value-horizontal {
    transform: translate(-50%, 50%);
  }

  .noUi-rtl .noUi-value-horizontal {
    transform: translate(50%, 50%);
  }

  .noUi-marker-horizontal.noUi-marker {
    margin-left: -1px;
    width: 2px;
    height: 5px;
  }

  .noUi-marker-horizontal.noUi-marker-sub {
    height: 10px;
  }

  .noUi-marker-horizontal.noUi-marker-large {
    height: 15px;
  }

  .noUi-pips-vertical {
    top: 0;
    left: 100%;
    padding: 0 10px;

    height: 100%;
  }

  .noUi-value-vertical {

    transform: translate(0, -50%);
    padding-left: 25px;
  }

  .noUi-rtl .noUi-value-vertical {
    transform: translate(0, 50%);
  }

  .noUi-marker-vertical.noUi-marker {
    margin-top: -1px;
    width: 5px;
    height: 2px;
  }

  .noUi-marker-vertical.noUi-marker-sub {
    width: 10px;
  }

  .noUi-marker-vertical.noUi-marker-large {
    width: 15px;
  }

  .noUi-tooltip {

    display: block;
    position: absolute;
    border: 1px solid #D9D9D9;
    border-radius: 3px;

    background: #fff;
    padding: 5px;
    text-align: center;
    white-space: nowrap;

    color: #000;
  }

  .noUi-horizontal .noUi-tooltip {
    bottom: 120%;
    left: 50%;

    transform: translate(-50%, 0);
  }

  .noUi-vertical .noUi-tooltip {
    top: 50%;
    right: 120%;

    transform: translate(0, -50%);
  }

  .noUi-horizontal .noUi-origin > .noUi-tooltip {
    bottom: 10px;
    left: auto;

    transform: translate(50%, 0);
  }

  .noUi-vertical .noUi-origin > .noUi-tooltip {
    top: auto;
    right: 28px;

    transform: translate(0, -18px);
  }

  .v-input-range {
    &__input {
      display: flex;
      flex-flow: row nowrap;

      &-native {
        outline: 0;
        border: 0;
        padding: 0;
      }
    }
  }
</style>
