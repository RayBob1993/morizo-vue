<template>
  <label
    class="v-radio"
    :class="{
      'v-radio--active': isChecked,
      'v-radio--disabled': isDisabled,
      'v-radio--error': validationStatus?.isError,
      [`v-radio--theme-${theme}`]: theme,
      ...classList
    }"
  >
    <input
      v-model="modelValue"
      type="radio"
      class="v-radio__native"
      :disabled="isDisabled"
      :value="value"
      v-on="listeners"
    >

    <span class="v-radio__input"/>

    <span
      v-if="$slots.default"
      class="v-radio__label"
    >
      <slot/>
    </span>

    <span
      v-if="label"
      class="v-radio__label"
      v-html="label"
    />
  </label>
</template>

<script lang="ts" setup>
  import type { IVRadioModelValue, IVRadioProps } from './types';
  import { useRadio, useListeners, useBreakpointsProp } from '../../../composables';
  import { useAttrs } from 'vue';

  const props = defineProps<IVRadioProps>();

  const modelValue = defineModel<IVRadioModelValue>({
    required: true
  });

  const attrs = useAttrs();

  const listeners = useListeners(attrs);

  const { isDisabled, validationStatus, isChecked } = useRadio(props, modelValue);
  const { classList } = useBreakpointsProp('v-radio', 'size', props);
</script>

<style lang="scss">
  .v-radio {
    --v-radio-gap: var(--gutter-8);
    --v-radio-gap-x: var(--v-radio-gap);
    --v-radio-gap-y: var(--v-radio-gap);
    --v-radio-input-size: auto;
    --v-radio-input-bg-color: transparent;
    --v-radio-input-bg-color-active: transparent;
    --v-radio-input-border-color: transparent;
    --v-radio-input-border-color-active: transparent;
    --v-radio-input-dot-size: auto;
    --v-radio-input-dot-bg-color: transparent;
    --v-radio-input-dot-bg-color-active: transparent;
    --v-radio-label-font-size: inherit;
    --v-radio-label-line-height: inherit;

    display: flex;
    flex-flow: row wrap;
    gap: var(--v-radio-gap-y) var(--v-radio-gap-x);

    cursor: pointer;

    &--disabled {
      @include utils-disabled();
    }

    @include breakpoints-prop (size) {
      &-medium {
        --v-radio-input-size: 16px;
        --v-radio-input-dot-size: 8px;
        --v-radio-label-font-size: var(--font-size-medium);
        --v-radio-label-line-height: var(--line-height-medium);

        .v-radio__input {
          &:before {
            top: var(--gutter-2);
            left: var(--gutter-2);
          }
        }
      }
    }

    &--theme {
      &-primary {
        --v-radio-input-bg-color: var(--color-white);
        --v-radio-input-bg-color-active: var(--color-black);
        --v-radio-input-border-color: var(--color-black);
        --v-radio-input-border-color-active: var(--color-black);
        --v-radio-input-dot-bg-color: var(--color-white);
        --v-radio-input-dot-bg-color-active: var(--color-white);
      }
    }

    @include hover {
      .v-radio__input {
        border-color: var(--v-radio-input-border-color-active);
      }
    }

    &__input {
      position: relative;

      transition: var(--transition-base);
      border: 1px solid var(--v-radio-input-border-color);

      border-radius: var(--radius-circle);
      background-color: var(--v-radio-input-bg);

      width: var(--v-radio-input-size);
      height: var(--v-radio-input-size);

      &:before {
        position: absolute;
        top: calc(50% - 5px);
        left: calc(50% - 5px);

        transform: scale(.3);

        transition: var(--transition-base);

        opacity: 0;

        border-radius: var(--radius-circle);

        background-color: var(--color-black);

        width: var(--v-radio-input-dot-size);
        height: var(--v-radio-input-dot-size);

        content: '';
      }
    }

    &__native {
      @include visible-hidden();

      &:checked {
        & ~ {
          .v-radio__input {
            background-color: var(--v-radio-input-bg-color-active);
            border-color: var(--v-radio-input-border-color-active);

            &:before {
              transform: none;
              opacity: 1;

              background-color: var(--v-radio-input-dot-bg-color-active);
            }
          }
        }
      }
    }

    &__label {
      @include utils-user-select(none);
      flex: 1;

      font-size: var(--v-radio-label-font-size);
      line-height: var(--v-radio-label-line-height);
    }
  }
</style>
