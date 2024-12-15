<template>
  <div
    v-click-outside="hide"
    class="v-dropdown"
    :class="[
      {
        'v-dropdown--open': isVisible,
        ...classList,
        [`v-dropdown--theme-${theme}`]: theme
      }
    ]"
  >
    <slot
      name="trigger"
      :is-visible="isVisible"
      :toggle="toggleVisible"
      :set-visible="setVisible"
    />

    <transition
      name="fade-in-up"
      @after-enter="onAfterEnter"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="isVisible"
        class="v-dropdown__menu"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import type { IVDropdownProps, IVDropdownSlots, IVDropdownExpose, IVDropdownEmits } from './types';
  import { VDropdownContextKey } from '../../keys';
  import { useToggle, useBreakpointsProp } from '../../composables';
  import { vClickOutside } from '../../directives';
  import { watch, provide } from 'vue';

  const props = defineProps<IVDropdownProps>();
  const emit = defineEmits<IVDropdownEmits>();

  defineSlots<IVDropdownSlots>();

  const { classList } = useBreakpointsProp('v-dropdown', 'size', props);
  const [isVisible, setVisible, toggleVisible] = useToggle();

  const hide = () => setVisible(false);

  function onAfterEnter (payload: Element) {
    emit('opened', payload);
  }

  function onAfterLeave (payload: Element) {
    emit('opened', payload);
  }

  watch(isVisible, value => {
    if (value) {
      emit('open');
    } else {
      emit('close');
    }
  });

  defineExpose<IVDropdownExpose>({
    setVisible,
    isVisible
  });

  provide(VDropdownContextKey, {
    props
  });
</script>

<style lang="scss">
  .v-dropdown {
    --v-dropdown-menu-bg-color: transparent;
    --v-dropdown-menu-border-color: transparent;
    --v-dropdown-menu-gap: 0;
    --v-dropdown-menu-gap-x: var(--v-dropdown-menu-gap);
    --v-dropdown-menu-gap-y: var(--v-dropdown-menu-gap);

    position: relative;

    &--theme {
      &-primary {
        --v-dropdown-menu-bg-color: var(--color-white);
        --v-dropdown-menu-border-color: var(--color-black);
      }
    }

    &--size {
      &-medium {
        --v-dropdown-menu-gap-y: var(--gutter-6);
      }
    }

    &__menu {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;

      border: 1px solid var(--v-dropdown-menu-border-color);
      min-width: 100%;
      padding: var(--v-dropdown-menu-gap-y) var(--v-dropdown-menu-gap-x);

      background-color: var(--v-dropdown-menu-bg-color);
    }
  }
</style>
