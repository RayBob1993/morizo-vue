<template>
  <div
    class="v-option"
    :class="[
      {
        'v-option--active': isActive,
        'v-option--disabled': isDisabled,
        ...classList,
        [`v-option--theme-${theme}`]: theme
      }
    ]"
    @click="Select?.onChange(value)"
  >
    <v-text
      v-if="!slots.default"
      class="v-option__value"
      size="medium"
    >
      {{ title }}
    </v-text>

    <template v-else>
      <slot
        :is-active="isActive"
        :is-disabled="isDisabled"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
  import type { IThemes } from '../../../enums';
  import type { Maybe } from '../../../types';
  import type { IVOptionInstance, IVOptionProps, IVOptionSlots } from './types';
  import { VText } from '../../Text';
  import { uuidv4 } from '../../../utils';
  import { useSelectContext, useBreakpointsProp } from '../../../composables';
  import { computed, reactive, onUnmounted } from 'vue';

  const props = defineProps<IVOptionProps>();
  const slots = defineSlots<IVOptionSlots>();
  const Select = useSelectContext();
  const { classList } = useBreakpointsProp('v-option', 'size', Select?.props);

  const isActive = computed<boolean>(() => Select?.modelValue.value === props.value);
  const isDisabled = computed<boolean>(() => Select?.isDisabled.value || props.disabled);
  const theme = computed<Maybe<IThemes>>(() => Select?.props.theme);

  const optionInstance = reactive<IVOptionInstance>({
    uid: uuidv4(),
    props
  });

  Select?.registerOption(optionInstance);

  onUnmounted(() => {
    Select?.unregisterOption(optionInstance);
  });
</script>

<style lang="scss">
  .v-option {
    cursor: pointer;

    &__value {
      transition: var(--transition-base);
    }
  }
</style>
