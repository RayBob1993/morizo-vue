<template>
  <div
    class="v-col"
    :class="[
      sizeClassList,
      offsetClassList,
      orderClassList,
      alignClassList
    ]"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  import type { IVColProps } from './types';
  import { useBreakpointsProp } from '../../../../composables';

  const props = defineProps<IVColProps>();

  const { classList: sizeClassList } = useBreakpointsProp('v-col', 'size', props);
  const { classList: offsetClassList } = useBreakpointsProp('v-col', 'offset', props);
  const { classList: orderClassList } = useBreakpointsProp('v-col', 'order', props);
  const { classList: alignClassList } = useBreakpointsProp('v-col', 'align', props);
</script>

<style lang="scss">
  .v-col {
    box-sizing: border-box;
    flex: 1 0 0%;
    width: 100%;
    max-width: 100%;
    min-height: 1px;

    @include breakpoints-prop (size) {
      @include generate-cols();
    }

    @include breakpoints-prop (offset) {
      @include generate-offsets();
    }

    @include breakpoints-prop (order) {
      @include generate-orders();
    }

    @include breakpoints-prop (align) {
      @include generate-align('self');
    }
  }
</style>
