<template>
  <div class="v-toast-container">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  .v-toast-container {
    position: fixed;
    z-index: 1051;

    @include media-sm-up {
      top: 0;
      right: 0;

      width: 320px;
    }

    @include media-sm-down {
      top: 0;
      right: 0;
      left: 0;

      width: 100%;
    }

    pointer-events: none;

    & > * {
      pointer-events: all;
    }
  }
</style>
