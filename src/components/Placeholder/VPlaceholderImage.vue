<template>
  <v-placeholder class="v-placeholder-image">
    <v-icon
      class="v-placeholder-image__icon"
      icon="image"
    />
  </v-placeholder>
</template>

<script setup lang="ts">
  import VPlaceholder from './VPlaceholder.vue';
</script>

<style lang="scss">
  .v-placeholder-image {
    @include utils-flex-center();

    &__icon {
      opacity: .2;

      width: 50%;
      height: 50%;
    }
  }
</style>
