<template>
  <div
    class="v-input-number"
    :class="{
      'v-input-number--disabled': isDisabled,
      [`v-input-number--theme-${theme}`]: theme,
      ...classList
    }"
  >
    <v-button-empty
      :disabled="isButtonDecrementDisabled"
      class="v-input-number__button v-input-number__button--decrement"
      @click="onDecrement"
    >
      -
    </v-button-empty>

    <div class="v-input-number__input">
      <input
        v-model.number="localModelValue"
        type="number"
        :step="step"
        :min="min"
        :max="max"
        class="v-input-number__input-native"
        :disabled="isDisabled"
        @update:model-value="onInput"
      >

      <span
        v-if="suffix"
        class="v-input-number__input-suffix"
      >
        {{ suffix }}.
      </span>
    </div>

    <v-button-empty
      :disabled="isButtonIncrementDisabled"
      class="v-input-number__button v-input-number__button--increment"
      @click="onIncrement"
    >
      +
    </v-button-empty>
  </div>
</template>

<script lang="ts" setup>
  import type { IVInputNumberProps, IVInputNumberModelValue, IVInputNumberEmits } from './types';
  import { VButtonEmpty } from '../../Button';
  import { useForm, useBreakpointsProp } from '../../../composables';
  import { debounce } from '../../../utils';
  import { ref, computed, watch } from 'vue';

  const props = withDefaults(defineProps<IVInputNumberProps>(), {
    min: -Infinity,
    max: Infinity,
    step: 1
  });

  const emit = defineEmits<IVInputNumberEmits>();

  const modelValue = defineModel<IVInputNumberModelValue>({
    default: 1
  });

  const localModelValue = ref<IVInputNumberModelValue>(1);

  const { isFormDisabled } = useForm();
  const { classList } = useBreakpointsProp('v-input-number', 'size', props);

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);
  const isButtonDecrementDisabled = computed<boolean>(() => isDisabled.value || modelValue.value === props.min);
  const isButtonIncrementDisabled = computed<boolean>(() => isDisabled.value || !(modelValue.value < props.max));

  function onDecrement () {
    if (modelValue.value > props.min) {
      modelValue.value -= props.step;

      emit('change', modelValue.value);
    }
  }

  function onIncrement () {
    if (modelValue.value < props.max) {
      modelValue.value += props.step;

      emit('change', modelValue.value);
    }
  }

  function getPrecisionValue (value: IVInputNumberModelValue) {
    if (value < props.step) {
      return props.step;
    }

    return (value % props.step === 0)
      ? value
      : Math.ceil(value / props.step) * props.step;
  }

  const onInput = debounce(300, (value: number) => {
    localModelValue.value = getPrecisionValue(value);
    modelValue.value = localModelValue.value;

    emit('change', modelValue.value);
  });

  watch(modelValue, value => {
    localModelValue.value = value;
  }, {
    immediate: true
  });
</script>

<style lang="scss">
  .v-input-number {
    display: flex;
    flex-flow: row nowrap;

    padding: var(--gutter-6);

    &__input {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;

      &-native {
        outline: none;
        border: 0;

        background-color: transparent;
        padding: 0;
        width: 100%;

        text-align: center;

        font-weight: 500;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          display: none;
        }

        &:disabled {
          @include utils-disabled();
        }
      }
    }

    &__button {
      flex: 0 0 32px;
      width: 32px;
      height: 32px;

      &:disabled {
        @include utils-disabled();
      }
    }
  }
</style>
