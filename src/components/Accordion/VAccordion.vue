<template>
  <div
    class="v-accordion"
    :class="{
      ...classList,
      [`v-accordion--theme-${theme}`]: theme
    }"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVAccordionValue, IVAccordionModelValue, IVAccordionProps, IVAccordionEmits } from './types';
  import type { Maybe } from '../../types';
  import { VAccordionContextKey } from '../../keys';
  import { useBreakpointsProp } from '../../composables';
  import { isUndefined } from '../../utils';
  import { provide } from 'vue';

  const props = defineProps<IVAccordionProps>();
  const emit = defineEmits<IVAccordionEmits>();

  const modelValue = defineModel<IVAccordionModelValue>({
    required: true
  });

  const { classList } = useBreakpointsProp('v-accordion', 'size', props);

  function onChange (value: Maybe<IVAccordionValue>) {
    if (Array.isArray(modelValue.value)) {
      if (isUndefined(value)) {
        return;
      }

      const items = new Set(modelValue.value);

      if (items.has(value)) {
        items.delete(value);
      } else {
        items.add(value);
      }

      modelValue.value = [...items];
    } else {
      modelValue.value = value;
    }

    emit('change', value);
  }

  provide(VAccordionContextKey, {
    props,
    modelValue,
    onChange
  });
</script>

<style lang="scss">
  .v-accordion {
    --v-accordion-item-header-padding: 0;
    --v-accordion-item-header-padding-x: var(--v-accordion-item-header-padding);
    --v-accordion-item-header-padding-y: var(--v-accordion-item-header-padding);
    --v-accordion-item-body-padding: 0;
    --v-accordion-item-body-padding-x: var(--v-accordion-item-body-padding);
    --v-accordion-item-body-padding-y: var(--v-accordion-item-body-padding);
    --v-accordion-item-title-color: inherit;
    --v-accordion-item-title-font-size: inherit;
    --v-accordion-item-title-line-height: inherit;
    --v-accordion-item-icon-color: inherit;
    --v-accordion-item-icon-size: auto;

    @include breakpoints-prop (size) {
      &-medium {
        --v-accordion-item-header-padding: var(--gutter-6);
        --v-accordion-item-body-padding: var(--gutter-6);
        --v-accordion-item-icon-size: 24px;
      }
    }
  }
</style>
