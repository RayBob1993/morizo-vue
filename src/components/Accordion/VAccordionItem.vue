<template>
  <div
    class="v-accordion-item"
    :class="{
      'v-accordion-item--active': isActive
    }"
  >
    <header
      class="v-accordion-item__header"
      @click="onToggleCollapse"
    >
      <template v-if="slots?.header">
        <slot
          name="header"
          :is-active="isActive"
        />
      </template>

      <div
        v-else
        class="v-accordion-item__header-inner"
      >
        <div class="v-accordion-item__title">
          {{ title }}
        </div>

        <v-icon
          v-if="!slots?.icon"
          class="v-accordion-item__icon"
          size="small"
          icon="arrow-down"
        />

        <div
          v-else
          class="v-accordion-item__icon"
        >
          <slot
            name="icon"
            :is-active="isActive"
          />
        </div>
      </div>
    </header>

    <transition
      name="accordion-item-transition"
      v-on="transitionEvents"
    >
      <div
        v-show="isActive"
        class="v-accordion-item__body"
      >
        <div class="v-accordion-item__body-content">
          <slot :is-active="isActive"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import type { Maybe } from '../../types';
  import type { IVAccordionModelValue, IVAccordionItemProps, IVAccordionItemSlots } from './types';
  import { useAccordionItemTransition } from './useAccordionItemTransition';
  import { VIcon } from '../Icons';
  import { useAccordionContext } from '../../composables';
  import { computed } from 'vue';

  const props = defineProps<IVAccordionItemProps>();
  const slots = defineSlots<IVAccordionItemSlots>();

  const Accordion = useAccordionContext();

  const modelValue = computed<Maybe<IVAccordionModelValue>>(() => Accordion?.modelValue.value);

  const { transitionEvents } = useAccordionItemTransition();

  const isActive = computed<boolean>(() => {
    return Array.isArray(modelValue.value)
      ? modelValue.value.includes(props.value)
      : modelValue.value === props.value;
  });

  function onToggleCollapse () {
    const changeValue = modelValue.value === props.value ? undefined : props.value;

    Accordion?.onChange(changeValue);
  }
</script>

<style lang="scss">
  .v-accordion-item {
    &--active {
      .v-accordion-item__header-icon {
        transform: rotate(180deg);
      }
    }

    &__header {
      cursor: pointer;

      padding: var(--v-accordion-item-header-padding-y) var(--v-accordion-item-header-padding-x);

      &-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    &__title {
      flex: 1;

      color: var(--v-accordion-item-title-color);
      font-size: var(--v-accordion-item-title-font-size);
      line-height: var(-v-accordion-item-title-line-height);
    }
    
    &__icon {
      width: var(--v-accordion-item-icon-size);
      height: var(--v-accordion-item-icon-size);

      fill: var(--v-accordion-item-icon-color);
    }

    &__body {
      transition: var(--transition-base);

      will-change: height;

      &-content {
        padding: var(--v-accordion-item-body-padding-y) var(--v-accordion-item-body-padding-x);
      }
    }
  }
</style>
