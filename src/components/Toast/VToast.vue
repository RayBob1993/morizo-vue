<template>
  <transition
    name="fade-in-up"
    @after-leave="onClose"
  >
    <div
      v-show="isVisible"
      class="v-toast"
      role="alert"
      :class="{
        [`v-toast--theme-${theme}`]: theme
      }"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="v-toast__header">
        <v-text
          v-if="title"
          weight="700"
          size="small"
          class="v-toast__title"
        >
          {{ title }}
        </v-text>

        <v-button-empty
          v-if="clearable"
          class="v-toast__button-close"
          @click="setVisible(false)"
        >
          X
        </v-button-empty>
      </div>

      <template v-if="message">
        <v-text
          v-if="useHtml"
          class="v-toast__text"
          size="small"
          :content="message"
        />

        <v-text
          v-else
          key="v-text-3"
          class="v-toast__text"
          size="small"
        >
          {{ message }}
        </v-text>
      </template>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import type { IVToastProps, IVToastEmits } from './types';
  import { useToggle } from '../../composables';
  import { VButtonEmpty } from '../Button';
  import { VText } from '../Text';
  import { ref, onMounted } from 'vue';

  const props = withDefaults(defineProps<IVToastProps>(), {
    duration: 1500,
    useHtml: false,
    clearable: true
  });

  const emit = defineEmits<IVToastEmits>();

  const [isVisible, setVisible] = useToggle();
  const timer = ref<NodeJS.Timeout | null>(null);

  function clearTimer () {
    if (timer.value) {
      clearTimeout(timer.value);
    }
  }

  function startTimer () {
    clearTimer();

    if (props.duration > 0) {
      timer.value = setTimeout(() => {
        setVisible(false);
      }, props.duration);
    }
  }

  function onClose () {
    emit('close');
  }

  onMounted(() => {
    startTimer();

    setVisible(true);
  });
</script>

<style lang="scss">
  .v-toast {
    position: relative;

    background-color: var(--color-white);

    padding: var(--gutter-12);

    &__button-close {
      position: absolute;
      top: 0;
      right: 0;

      padding: var(--gutter-4);
    }
  }
</style>
