<template>
  <label
    class="v-checkbox"
    :class="{
      'v-checkbox--disabled': isDisabled,
      'v-checkbox--error': validationStatus?.isError,
      'v-checkbox--active': isChecked,
      ...classList,
      [`v-checkbox--theme--${theme}`]: theme
    }"
  >
    <input
      v-model="modelValue"
      type="checkbox"
      class="v-checkbox__native"
      :disabled="isDisabled"
      :value="value"
      v-on="listeners"
    >

    <span class="v-checkbox__input">
      <v-icon
        class="v-checkbox__input-icon"
        size="medium"
        icon="check"
      />
    </span>

    <span
      v-if="$slots.default"
      class="v-checkbox__label"
    >
      <slot/>
    </span>

    <span
      v-if="label"
      class="v-checkbox__label"
      v-html="label"
    />
  </label>
</template>

<script lang="ts" setup>
  import type { IVCheckboxModelValue, IVCheckboxProps } from './types';
  import { VIcon } from '../../Icons';
  import { useCheckbox, useListeners, useBreakpointsProp } from '../../../composables';
  import { useAttrs } from 'vue';

  const props = defineProps<IVCheckboxProps>();

  const modelValue = defineModel<IVCheckboxModelValue>({
    required: true
  });

  const attrs = useAttrs();

  const listeners = useListeners(attrs);
  const { classList } = useBreakpointsProp('v-checkbox', 'size', props);

  const { isDisabled, validationStatus, isChecked } = useCheckbox(props, modelValue);
</script>

<style lang="scss">
  .v-checkbox {
    display: flex;
    flex-flow: row wrap;
    gap: 0 var(--gutter-12);

    cursor: pointer;

    &--disabled {
      @include utils-disabled();
    }

    &__input {
      transition: var(--transition-base);
      border: 1px solid;
      width: 20px;
      height: 20px;

      &-icon {
        transform: scale(.3);

        opacity: 0;
      }
    }

    &__native {
      @include visible-hidden();

      &:checked {
        & ~ {
          .v-checkbox__input {
            background-color: var(--color-black);

            .v-checkbox__input-icon {
              transform: none;
              opacity: 1;
            }
          }
        }
      }
    }

    &__label {
      @include utils-user-select(none);
      flex: 1;
    }
  }
</style>
