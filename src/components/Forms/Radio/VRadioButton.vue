<template>
  <label
    class="v-radio-button"
    :class="{
      'v-radio-button--active': isChecked,
      'v-radio-button--disabled': isDisabled,
      'v-radio-button--error': validationStatus?.isError,
      [`v-radio-button--theme-${theme}`]: theme,
      ...classList
    }"
  >
    <input
      v-model="modelValue"
      type="radio"
      class="v-radio-button__native"
      :disabled="isDisabled"
      :value="value"
      v-on="listeners"
    >

    <span
      v-if="$slots.default"
      class="v-radio-button__label"
    >
      <slot/>
    </span>

    <span
      v-if="label"
      class="v-radio-button__label"
      v-html="label"
    />
  </label>
</template>

<script lang="ts" setup>
  import type { IVRadioValue, IVRadioProps } from './types';
  import { useRadio, useListeners, useBreakpointsProp } from '../../../composables';
  import { useAttrs } from 'vue';

  const props = defineProps<IVRadioProps>();

  const modelValue = defineModel<IVRadioValue>({
    required: true
  });

  const attrs = useAttrs();

  const listeners = useListeners(attrs);

  const { isDisabled, validationStatus, isChecked } = useRadio(props, modelValue);
  const { classList } = useBreakpointsProp('v-radio-button', 'size', props);
</script>

<style lang="scss">
  .v-radio-button {
    --v-radio-button-padding: 0;
    --v-radio-button-padding-x: var(--v-radio-button-padding);
    --v-radio-button-padding-y: var(--v-radio-button-padding);
    --v-radio-button-font-size: inherit;
    --v-radio-button-line-height: inherit;
    --v-radio-button-bg-color: transparent;
    --v-radio-button-border-color: transparent;
    --v-radio-button-color: inherit;

    display: inline-flex;

    cursor: pointer;

    &--disabled {
      @include utils-disabled();
    }

    @include breakpoints-prop (size) {
      &-medium {
        --v-radio-button-padding-y: var(--gutter-8);
        --v-radio-button-padding-x: var(--gutter-10);
        --v-radio-button-font-size: var(--font-size-medium);
        --v-radio-button-line-height: var(--line-height-medium);
      }
    }

    &--theme {
      &-primary {
        --v-radio-button-bg-color: var(--color-white);

        @include hover {
          &:not(.v-radio-button--active) {
            --v-radio-button-border-color: var(--color-black);
          }
        }
      }
    }

    &__native {
      @include visible-hidden();
    }

    &--active {
      &.v-radio-button--theme {
        &-primary {
          --v-radio-button-bg-color: var(--color-black);
          --v-radio-button-border-color: var(--color-black);
          --v-radio-button-color: var(--color-white);
        }
      }
    }

    &__label {
      flex: 1;
      border: 1px solid var(--v-radio-button-border-color);
      padding: var(--v-radio-button-padding-y) var(--v-radio-button-padding-x);

      font-size: var(--v-radio-button-font-size);
      line-height: var(--v-radio-button-line-height);
      color: var(--v-radio-button-color);

      background-color: var(--v-radio-button-bg-color);

      transition: var(--transition-base);
    }
  }
</style>
