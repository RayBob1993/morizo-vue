<template>
  <div
    ref="root"
    class="v-affix"
  >
    <div
      ref="content"
      class="v-affix__content"
    >
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IVAffixProps } from './types';
  import { Affix } from './Affix';
  import { watch, onMounted, onBeforeUnmount, shallowRef } from 'vue';

  const props = withDefaults(defineProps<IVAffixProps>(), {
    offsetTop: 0,
    offsetBottom: 0,
    disabled: false
  });

  const root = shallowRef<HTMLDivElement>();
  const content = shallowRef<HTMLDivElement>();
  const container = shallowRef<HTMLElement>();
  const stickySidebar = shallowRef<Affix>();

  function setContainer () {
    if (props.container) {
      container.value = document.querySelector<HTMLElement>(props.container) ?? undefined;
    } else {
      container.value = root.value?.parentElement ?? undefined;
    }
  }

  function initAffix () {
    setContainer();

    if (root.value && container.value && content.value) {
      stickySidebar.value = new Affix(root.value, {
        offsetTop: props.offsetTop,
        offsetBottom: props.offsetBottom,
        container: container.value,
        innerWrapper: content.value
      });
    }
  }

  function destroyAffix () {
    stickySidebar.value?.destroy();
    stickySidebar.value = undefined;
  }

  onMounted(() => {
    if (props.disabled) {
      return;
    }

    initAffix();
  });

  onBeforeUnmount(() => {
    destroyAffix();
  });

  watch(() => props.disabled, value => {
    if (value) {
      destroyAffix();
    } else {
      initAffix();
    }
  });
</script>
