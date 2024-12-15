<template>
  <div class="v-layout">
    <slot name="header"/>

    <main class="v-layout__body">
      <slot/>
    </main>

    <slot name="footer"/>
  </div>
</template>

<script setup lang="ts">
  import type { IVLayoutSlots } from './types';

  defineSlots<IVLayoutSlots>();
</script>

<style lang="scss">
  .v-layout {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    min-height: 100vh;

    &__body {
      flex: 1;
    }
  }
</style>
