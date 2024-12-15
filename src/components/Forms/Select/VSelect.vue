<template>
  <v-dropdown
    ref="dropdown"
    class="v-select"
    :class="[
      {
        ...classList,
        [`v-select--theme-${theme}`]: theme,
        'v-select--disabled': isDisabled,
        'v-select--error': validationStatus?.isError
      }
    ]"
    @open="emit('open')"
    @close="emit('close')"
    @opened="emit('opened', $event)"
    @closed="emit('opened', $event)"
  >
    <template #trigger="{ toggle }">
      <div
        class="v-select__header"
        tabindex="0"
        @click="toggle"
      >
        <div class="v-select__header-inner">
          <div
            v-if="title"
            class="v-select__title"
          >
            {{ title }}

            <span
              v-if="isRequired"
              class="v-select__title-required"
            >
              *
            </span>
          </div>

          <div
            v-if="activeOption"
            class="v-select__value"
          >
            {{ activeOption.props.title }}
          </div>
        </div>

        <v-icon
          class="v-select__header-icon"
          theme="secondary"
          size="small"
          icon="arrow-down"
        />
      </div>
    </template>

    <v-scrollbar class="v-select__scrollbar">
      <slot/>
    </v-scrollbar>
  </v-dropdown>
</template>

<script lang="ts" setup>
  import type { IVSelectModelValue, IVOptionInstance, IVSelectProps, IVSelectExpose, IVSelectEmits } from './types';
  import type { Maybe, IVDropdownInstance } from '../../../types';
  import { useForm, useBreakpointsProp } from '../../../composables';
  import { VIcon } from '../../Icons';
  import { VScrollbar } from '../../Scrollbar';
  import { VDropdown } from '../../Dropdown';
  import { VSelectContextKey } from '../../../keys';
  import { useTemplateRef, ref, computed, provide } from 'vue';

  const props = defineProps<IVSelectProps>();
  const emit = defineEmits<IVSelectEmits>();

  const modelValue = defineModel<IVSelectModelValue>({
    required: true
  });

  const dropdown = useTemplateRef<IVDropdownInstance>('dropdown');

  const { isFormDisabled, isRequired, validationStatus } = useForm();
  const { classList } = useBreakpointsProp('v-select', 'size', props);

  const options = ref<Array<IVOptionInstance>>([]);

  const hasValue = computed<boolean>(() => !!modelValue.value);

  const activeOption = computed<Maybe<IVOptionInstance>>(() => {
    return options.value.find(option => option.props.value === modelValue.value);
  });

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);

  function onChange (value: IVSelectModelValue) {
    modelValue.value = value;

    emit('change', value);

    setVisible(false);
  }

  function registerOption (newOption: IVOptionInstance) {
    const option: Maybe<IVOptionInstance> = options.value.find(option => option.uid === newOption.uid);

    if (!option) {
      options.value.push(newOption);
    }
  }

  function unregisterOption (oldOption: IVOptionInstance) {
    options.value = options.value.filter(option => option.uid !== oldOption.uid);
  }

  function setVisible (payload: boolean) {
    dropdown.value?.setVisible(payload);
  }

  defineExpose<IVSelectExpose>({
    setVisible
  });

  provide(VSelectContextKey, {
    props,
    modelValue,
    hasValue,
    isDisabled,
    onChange,
    registerOption,
    unregisterOption
  });
</script>

<style lang="scss">
  .v-select {
    position: relative;

    &--disabled {
      @include utils-disabled();
    }

    &--open {
      .v-select__header-icon {
        transform: rotate(180deg);
      }
    }

    &__header {
      display: flex;
      position: relative;
      flex-flow: row nowrap;
      align-items: center;
      border: 1px solid;

      cursor: pointer;

      outline: none;

      &-inner {
        flex: 1;

        overflow: hidden;
      }

      &-icon {
        margin-left: var(--gutter-8);
      }
    }

    &__scrollbar {
      max-height: 250px;
    }
  }
</style>
