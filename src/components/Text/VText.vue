<template>
  <component
    :is="tag"
    v-if="content"
    :class="classList"
  >
    <div v-html="content"/>
  </component>

  <component
    :is="tag"
    v-else
    :class="classList"
  >
    <slot/>
  </component>
</template>

<script lang="ts" setup>
  import type { IVTextProps } from './types';
  import { FamilyList } from '../../enums';
  import { useBreakpointsProp } from '../../composables';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<IVTextProps>(), {
    tag: 'div',
    family: FamilyList.roboto
  });

  const { classList: sizeClassList } = useBreakpointsProp('v-text', 'size', props);
  const { classList: alignClassList } = useBreakpointsProp('v-text', 'align', props);

  const classList = computed(() => {
    return [
      'v-text',
      {
        ...sizeClassList.value,
        ...alignClassList.value,
        [`v-text--weight-${props.weight}`]: props.weight,
        [`v-text--theme-${props.theme}`]: props.theme,
        [`v-text--family-${props.family}`]: props.family,
        'v-text--uppercase': props.uppercase
      }
    ];
  });
</script>

<style lang="scss">
  .v-text {
    --v-text-color: inherit;

    color: var(--v-text-color);

    &--uppercase {
      text-transform: uppercase;
    }

    &--theme {
      &-primary {
        --v-text-color: var(--color-black);
      }
    }

    @include breakpoints-prop (size) {
      &-massive {
        @include font-size-massive();
      }

      &-huge {
        @include font-size-huge();
      }

      &-big {
        @include font-size-big();
      }

      &-large {
        @include font-size-large();
      }

      &-medium {
        @include font-size-medium();
      }

      &-small {
        @include font-size-small();
      }

      &-mini {
        @include font-size-mini();
      }
    }

    @include breakpoints-prop (align) {
      &-left {
        text-align: left;
      }

      &-center {
        text-align: center;
      }

      &-right {
        text-align: right;
      }
    }

    &--weight {
      &-100 {
        font-weight: 100;
      }

      &-200 {
        font-weight: 200;
      }

      &-300 {
        font-weight: 300;
      }

      &-400 {
        font-weight: 400;
      }

      &-500 {
        font-weight: 500;
      }

      &-600 {
        font-weight: 600;
      }

      &-700 {
        font-weight: 700;
      }

      &-800 {
        font-weight: 800;
      }

      &-900 {
        font-weight: 900;
      }
    }

    &--family {
      &-roboto {
        font-family: var(--font-family-roboto);
      }
    }

    a {
      color: inherit;
    }
  }
</style>
