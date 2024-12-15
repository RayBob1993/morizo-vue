<template>
  <div
    class="v-input"
    :class="[
      {
        ...classList,
        [`v-input--theme-${theme}`]: theme,
        'v-input--disabled': isDisabled,
        'v-input--textarea': isTextarea,
        'v-input--focus': isFocus,
        'v-input--filled': hasValue,
        'v-input--error': validationStatus?.isError
      }
    ]"
  >
    <div class="v-input__body">
      <div
        v-if="slots?.before"
        class="v-input__body-content"
      >
        <slot
          name="before"
          v-bind="scopedSlots"
        />
      </div>

      <div class="v-input__body-control">
        <label
          v-if="title"
          class="v-input__title"
          @click="focus"
        >
          {{ title }}

          <template v-if="showRequired">
            <span
              v-if="isRequired"
              class="input__title-required"
            >
              *
            </span>
          </template>
        </label>

        <input
          v-if="!isTextarea"
          ref="input"
          v-model="modelValue"
          :type="nativeType"
          :inputmode="inputMode"
          class="v-input__native"
          :disabled="isDisabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          v-on="inputListeners"
        >

        <textarea
          v-else
          ref="input"
          v-model="modelValue"
          class="v-input__native"
          :disabled="isDisabled"
          :readonly="readonly"
          v-on="inputListeners"
        />
      </div>

      <div
        v-if="slots?.after"
        class="v-input__body-content"
      >
        <slot
          name="after"
          v-bind="scopedSlots"
        />
      </div>
    </div>

    <slot v-bind="scopedSlots"/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVInputModelValue, IVInputProps, IVInputEmits, IVInputSlots, IVInputNative, IVInputExpose, IVInputScopedSlots } from './types';
  import { InputTypesList, InputNativeTypesList, InputModes } from '../../../enums';
  import { useForm, useListeners, useToggle, useBreakpointsProp } from '../../../composables';
  import { useTemplateRef, computed, useAttrs } from 'vue';

  const props = withDefaults(defineProps<IVInputProps>(), {
    type: InputTypesList.input,
    nativeType: InputNativeTypesList.text,
    inputMode: InputModes.text,
    showRequired: true
  });

  const emit = defineEmits<IVInputEmits>();
  const slots = defineSlots<IVInputSlots>();

  const modelValue = defineModel<IVInputModelValue>({
    required: true
  });

  const attrs = useAttrs();

  const listeners = useListeners(attrs);
  const { classList } = useBreakpointsProp('v-input', 'size', props);

  const { validationStatus, isFormDisabled, isRequired } = useForm();

  const input = useTemplateRef<IVInputNative>('input');

  const [isFocus, setFocus] = useToggle();
  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);
  const isTextarea = computed<boolean>(() => props.type === InputTypesList.textarea);
  const hasValue = computed<boolean>(() => !!modelValue.value);

  const scopedSlots = computed<IVInputScopedSlots>(() => ({
    isFilled: hasValue.value,
    isFocus: isFocus.value
  }));

  const inputListeners = computed(() => {
    return {
      ...listeners,
      focusin: (event: Event) => {
        setFocus(true);

        emit('focusin', event);
      },
      focusout: (event: Event) => {
        setFocus(false);

        emit('focusout', event);
      }
    };
  });

  function focus () {
    input.value?.focus();
  }

  defineExpose<IVInputExpose>({
    input,
    focus
  });
</script>

<style lang="scss">
  .v-input {
    --v-input-font-size: inherit;
    --v-input-line-height: inherit;
    --v-input-textarea-min-height: 140px;
    --v-input-color: inherit;
    --v-input-border-color: inherit;

    &--textarea {
      .v-input__native {
        min-height: var(--v-input-textarea-min-height);

        resize: vertical;
      }
    }

    &--filled {
      .v-input__title {
        top: 0;
      }
    }

    &--disabled {
      @include utils-disabled();
    }

    &__title {
      position: absolute;
      top: 0;
      left: 0;

      transition: var(--transition-base);

      cursor: text;

      text-overflow: ellipsis;

      white-space: nowrap;
    }

    &__body {
      display: flex;
      align-items: stretch;

      transition: var(--transition-base);
      border: 1px solid var(--v-input-border-color);
      width: 100%;

      &-control {
        position: relative;

        width: 100%;
        overflow: hidden;
      }

      &-content {
        @include utils-flex-center();
        flex-shrink: 0;
      }
    }

    &__native {
      @include utils-appearance(none);
      display: block;

      outline: none;
      border: none;

      box-shadow: none;
      border-radius: 0;

      background-color: transparent;
      padding: 0;
      width: 100%;

      font-size: var(--v-input-font-size);
      line-height: var(--v-input-line-height);
      color: var(--v-input-color);

      &:disabled {
        @include utils-disabled();
      }
    }
  }
</style>
