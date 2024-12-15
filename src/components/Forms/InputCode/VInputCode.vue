<template>
  <fieldset
    class="v-input-code"
    :class="[
      {
        ...classList,
        [`v-input-code--theme-${theme}`]: theme,
        'v-input-code--disabled': isDisabled,
        'v-input-code--error': validationStatus?.isError
      }
    ]"
  >
    <input
      v-for="(item, index) in codeLength"
      :key="item"
      :ref="(el: HTMLInputElement) => setInput(el, item)"
      type="text"
      maxlength="1"
      :value="inputValues.get(item)"
      class="v-input-code__native"
      inputmode="numeric"
      :disabled="isDisabled"
      @input="onInput($event, index, item)"
      @keydown="onKeydown($event, index, item)"
    >
  </fieldset>
</template>

<script setup lang="ts">
  import type { ComponentPublicInstance } from 'vue';
  import type { IVInputCodeProps, IVInputCodeMapValues, IVInputCodeEmits, IVInputCodeExpose } from './types';
  import { useForm, useBreakpointsProp } from '../../../composables';
  import { ref, computed, watch } from 'vue';

  const props = withDefaults(defineProps<IVInputCodeProps>(), {
    codeLength: 4
  });

  const emit = defineEmits<IVInputCodeEmits>();

  const inputList = ref<Array<HTMLInputElement>>([]);
  const localMap = ref<IVInputCodeMapValues>(new Map());

  const { FormItem, validationStatus, isFormDisabled } = useForm();
  const { classList } = useBreakpointsProp('v-input-code', 'size', props);

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);

  const inputValues = computed({
    get: () => localMap.value,
    set: value => {
      emit('update:model-value', getEmittedValue(value));
    }
  });

  async function setInput (el: Element | ComponentPublicInstance | null, item: number) {
    const index = item - 1;

    if (el instanceof HTMLInputElement) {
      inputList.value[index] = el;
    }
  }

  function setInputFocus (index: number) {
    if (inputList.value[index]) {
      inputList.value[index].focus();
    }
  }

  function getMapValues (): IVInputCodeMapValues {
    const map: IVInputCodeMapValues = new Map();

    for (const item of Array.from({ length: props.codeLength }, (_, i) => i)) {
      if (!props.modelValue) {
        map.set(item + 1, undefined);
      } else {
        const values = [...props.modelValue.toString()];

        map.set(item + 1, values[item]);
      }
    }

    return map;
  }

  function getEmittedValue (map: IVInputCodeMapValues): string {
    return [...map.values()].join('');
  }

  function onInput (event: Event, index: number, item: number) {
    const newValue = (event.target as HTMLInputElement)?.value;

    if (Number.isNaN(parseInt(newValue))) {
      inputList.value[index].value = '';

      event.preventDefault();

      return;
    }

    inputValues.value = localMap.value.set(item, newValue);

    if (newValue) {
      setInputFocus(index + 1);
    }
  }

  function onKeydown (event: KeyboardEvent, index: number, item: number) {
    if (event.key === 'Backspace') {
      inputValues.value = localMap.value.set(item, undefined);

      setInputFocus(index - 1);
    }
  }

  function reset () {
    emit('update:model-value', '');
  }

  FormItem?.registerField({
    reset
  });

  watch(() => props.modelValue, (value, oldValue) => {
    if (value !== oldValue) {
      localMap.value = getMapValues();
    }
  }, {
    immediate: true
  });

  defineExpose<IVInputCodeExpose>({
    setFocus: () => setInputFocus(0)
  });
</script>

<style lang="scss">
  .v-input-code {
    display: flex;
    flex-flow: row nowrap;
    gap: 0 var(--gutter-12);
    justify-content: center;

    &--disabled {
      @include utils-disabled();
    }

    &__native {
      @include utils-appearance(none);

      transition: var(--transition-base);

      outline: none;
      border: 1px solid;

      box-shadow: none;
      border-radius: 0;

      background-color: transparent;
      padding: 0;

      text-align: center;

      &:disabled {
        @include utils-disabled();
      }
    }
  }
</style>
