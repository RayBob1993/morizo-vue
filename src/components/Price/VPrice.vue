<template>
  <div
    ref="root"
    class="v-price"
    :class="{
      [`v-price--size-${size}`]: size,
      [`v-price--theme-${theme}`]: theme,
      'v-price--normal': !old,
      'v-price--old': old
    }"
  >
    {{ priceFormatted }}
  </div>
</template>

<script lang="ts" setup>
  import type { IVPriceProps, IVPriceExpose } from './types';
  import { ref, computed } from 'vue';

  const props = withDefaults(defineProps<IVPriceProps>(), {
    format: () => ({
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'RUB'
    })
  });

  const root = ref<HTMLDivElement>();

  const priceFormatted = computed<string>(() => Number(props.price).toLocaleString('ru-RU', props.format));

  defineExpose<IVPriceExpose>({
    el: root
  });
</script>

<style lang="scss">
  .v-price {
    display: inline-flex;

    &--old {
      position: relative;

      &::after {
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;

        background-color: var(--color-black);

        width: 100%;

        height: 1px;

        content: '';
      }
    }
  }
</style>
