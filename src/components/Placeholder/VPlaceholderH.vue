<template>
  <div
    class="v-placeholder-h"
    :class="[`v-placeholder-h--${level}`]"
  >
    <v-placeholder class="v-placeholder-h__content"/>
  </div>
</template>

<script setup lang="ts">
  import VPlaceholder from './VPlaceholder.vue';

  defineProps<{
    level: '1' | '2' | '3' | '4' | '5' | '6';
  }>();
</script>

<style lang="scss">
  .v-placeholder-h {
    --v-placeholder-h-padding-y: 0;
    --v-placeholder-h-content-height: 0;

    padding-top: var(--v-placeholder-h-padding-y);
    padding-bottom: var(--v-placeholder-h-padding-y);

    &--1 {
      --v-placeholder-h-content-height: var(--font-size-h1);
      --v-placeholder-h-padding-y: calc(calc(var(--line-height-h1) - var(--font-size-h1)) / 2);
    }

    &--2 {
      --v-placeholder-h-content-height: var(--font-size-h2);
      --v-placeholder-h-padding-y: calc(calc(var(--line-height-h2) - var(--font-size-h2)) / 2);
    }

    &--3 {
      --v-placeholder-h-content-height: var(--font-size-h3);
      --v-placeholder-h-padding-y: calc(calc(var(--line-height-h3) - var(--font-size-h3)) / 2);
    }

    &--4 {
      --v-placeholder-h-content-height: var(--font-size-h4);
      --v-placeholder-h-padding-y: calc(calc(var(--line-height-h4) - var(--font-size-h4)) / 2);
    }

    &--5 {
      --v-placeholder-h-content-height: var(--font-size-h5);
      --v-placeholder-h-padding-y: calc(calc(var(--line-height-h5) - var(--font-size-h5)) / 2);
    }

    &--6 {
      --v-placeholder-h-content-height: var(--font-size-h6);
      --v-placeholder-h-padding-y: calc(calc(var(--line-height-h6) - var(--font-size-h6)) / 2);
    }

    &__content {
      height: var(--v-placeholder-h-content-height);
    }
  }
</style>
