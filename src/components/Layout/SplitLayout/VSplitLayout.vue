<template>
  <section
    class="v-split-layout"
    :class="{
      [`v-split-layout--sidebar-direction-${sidebarDirection}`]: sidebarDirection
    }"
  >
    <div class="v-split-layout__body">
      <slot/>
    </div>

    <aside
      v-if="slots?.sidebar"
      class="v-split-layout__sidebar"
    >
      <slot name="sidebar"/>
    </aside>
  </section>
</template>

<script lang="ts" setup>
  import type { IVSplitLayoutProps, IVSplitLayoutSlots } from './types';

  withDefaults(defineProps<IVSplitLayoutProps>(), {
    sidebarDirection: 'right'
  });

  const slots = defineSlots<IVSplitLayoutSlots>();
</script>

<style lang="scss">
  .v-split-layout {
    --v-split-layout-sidebar-width: 400px;
    --v-split-layout-gap: 0;
    --v-split-layout-gap-x: var(--v-split-layout-gap);
    --v-split-layout-gap-y: var(--v-split-layout-gap);

    display: flex;
    flex-wrap: wrap;
    gap: var(--v-split-layout-gap-x) var(--v-split-layout-gap-y);

    @include media-lg-up {
      flex-direction: row;
    }

    @include media-lg-down {
      flex-direction: column;
    }

    &--sidebar-direction {
      &-left {
        .v-split-layout__sidebar {
          order: -1;
        }
      }
    }

    &__body {
      flex: 1;
    }

    &__sidebar {
      @include media-lg-up {
        width: var(--v-split-layout-sidebar-width);
      }
    }
  }
</style>
