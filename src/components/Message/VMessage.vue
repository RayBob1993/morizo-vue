<template>
  <v-backdrop
    v-model="isVisible"
    @click="onClose"
  >
    <transition name="fade-in-up">
      <div
        v-show="isVisible"
        :class="{
          [`v-message--size-${size}`]: size,
          [`v-message--theme-${theme}`]: theme,
          [`v-message--position-${position}`]: position
        }"
        class="v-message"
        @click.stop
      >
        <v-button-empty
          class="v-message__close"
          @click="onClose"
        >
          X
        </v-button-empty>

        <div
          v-if="title"
          class="v-message__title"
        >
          {{ title }}
        </div>

        <div class="v-message__content">
          <template v-if="!isComponent">
            {{ message }}
          </template>

          <component
            :is="message"
            v-else
          />
        </div>
      </div>
    </transition>
  </v-backdrop>
</template>

<script setup lang="ts">
  import type { IVMessageEmits, IVMessageProps } from './types';
  import { VBackdrop } from '../Backdrop';
  import { VButtonEmpty } from '../Button';
  import { isString } from '../../utils';

  const props = withDefaults(defineProps<IVMessageProps>(), {
    position: 'center'
  });

  const emit = defineEmits<IVMessageEmits>();

  const [isVisible] = useToggle(true);

  const isComponent = computed<boolean>(() => !isString(props.message));

  function onClose () {
    emit('close');
  }
</script>

<style lang="scss">
  .v-message {
    position: absolute;

    &__close {
      position: absolute;
      top: 0;
      right: 0;
    }

    &--theme {
      &-primary {
        background: white;
        border: 1px solid black;
      }
    }

    &--size {
      &-small {
        width: 100%;
        max-width: 300px;
      }

      &-medium {
        width: 100%;
        max-width: 400px;
      }
    }

    &--position {
      &-top {
        top: 0;
        left: 50%;
        transform: translate(-50%);
      }

      &-center {
        top: 50%;
        left: 50%;
        transform: translate(-50%);
      }

      &-bottom {
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
</style>
