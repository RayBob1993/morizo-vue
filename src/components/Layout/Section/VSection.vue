<template>
  <section class="v-section">
    <header
      v-if="title"
      class="v-section__header"
    >
      <v-container>
        <h2 class="v-section__title">
          {{ title }}
        </h2>
      </v-container>
    </header>

    <div class="v-section__body">
      <template v-if="slots?.body">
        <slot name="body"/>
      </template>

      <v-container v-else>
        <slot/>
      </v-container>
    </div>

    <footer
      v-if="slots?.footer"
      class="v-section__footer"
    >
      <v-container>
        <slot name="footer"/>
      </v-container>
    </footer>
  </section>
</template>

<script lang="ts" setup>
  import type { IVSectionProps, IVSectionSlots } from './types';
  import { VContainer } from '../index';

  defineProps<IVSectionProps>();

  const slots = defineSlots<IVSectionSlots>();
</script>

<style lang="scss">
  .v-section {
    --v-section-title-color: inherit;
    --v-section-title-font-size: var(--font-size-h2);
    --v-section-title-line-height: var(--line-height-h2);

    &__header {
      margin-bottom: var(--gutter-20);
    }

    &__title {
      font-size: var(--v-section-title-font-size);
      line-height: var(--v-section-title-line-height);
      color: var(--v-section-title-color);
    }
  }
</style>
