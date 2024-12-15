<template>
  <div class="v-form-item-errors">
    <div
      v-for="(error, index) in errors"
      :key="`error-${index}`"
      class="v-form-item-errors__item"
    >
      {{ error.message }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IVFormItemErrorsProps } from './types';

  defineProps<IVFormItemErrorsProps>();
</script>

<style lang="scss">
  .v-form-item-errors {
    margin-top: var(--gutter-4);
  }
</style>
