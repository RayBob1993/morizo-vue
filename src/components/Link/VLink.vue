<template>
  <router-link
    :to="url"
    :target="target"
    class="v-link"
    :class="{
      ...classList,
      [`v-link--theme-${theme}`]: theme,
      'v-link--underline': underline,
      'v-link--uppercase': uppercase
    }"
  >
    <slot/>
  </router-link>
</template>

<script lang="ts" setup>
  import type { IVLinkProps } from './types';
  import { RouterLink } from 'vue-router';
  import { useBreakpointsProp } from '../../composables';

  const props = defineProps<IVLinkProps>();

  const { classList } = useBreakpointsProp('v-link', 'size', props);
</script>

<style lang="scss">
  .v-link {
    --v-link-color: inherit;

    display: inline-flex;
    position: relative;
    align-items: center;

    transition: color var(--transition-base-duration) ease;

    text-decoration: none;

    color: var(--v-link-color);

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

    &--theme {
      &-primary {
        --v-link-color: var(--color-black);
      }
    }

    &--uppercase {
      text-transform: uppercase;
    }

    &--underline {
      border-bottom: 1px solid;

      @include hover {
        border-bottom-color: transparent;
      }
    }
  }
</style>
