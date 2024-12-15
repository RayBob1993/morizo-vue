<template>
  <div
    class="v-row"
    :class="{
      ...justifyClassList,
      ...alignClassList,
      'v-row--gutters-x': guttersX,
      'v-row--gutters-y': guttersY,
      'v-row--no-wrap': !wrap
    }"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVRowProps } from './types';
  import { useBreakpointsProp } from '../../../../composables';

  const props = withDefaults(defineProps<IVRowProps>(), {
    wrap: true,
    guttersX: true
  });

  const { classList: justifyClassList } = useBreakpointsProp('v-row', 'justify', props);
  const { classList: alignClassList } = useBreakpointsProp('v-row', 'align', props);
</script>

<style lang="scss">
  .v-row {
    --v-row-gutter: var(--gutter-10);
    --v-row-gutter-x: var(--v-row-gutter);
    --v-row-gutter-y: var(--v-row-gutter);

    display: flex;
    flex-flow: row wrap;

    &--gutters {
      &-x {
        margin-right: calc(-1 * var(--v-row-gutter-x));
        margin-left: calc(-1 * var(--v-row-gutter-x));

        > .v-col {
          padding-right: var(--v-row-gutter-x);
          padding-left: var(--v-row-gutter-x);
        }
      }

      &-y {
        gap: calc(var(--v-row-gutter-y) * 2) 0;
      }
    }

    &--no-wrap {
      flex-wrap: nowrap;
    }

    @include breakpoints-prop (justify) {
      @include generate-justify();
    }

    @include breakpoints-prop (align) {
      @include generate-align('items');
    }
  }
</style>
