<template>
  <transition name="fade-in">
    <div
      v-show="modelValue"
      class="v-backdrop"
    >
      <slot/>
    </div>
  </transition>
</template>

<script setup lang="ts">
  const modelValue = defineModel<boolean>({
    required: true
  });
</script>

<style lang="scss">
  .v-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;

    background-color: var(--overlay-dark-background);
  }
</style>
