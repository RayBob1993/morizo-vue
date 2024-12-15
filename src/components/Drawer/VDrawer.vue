<template>
  <teleport
    to="#teleports"
    :disabled="!appendToBody"
  >
    <v-backdrop v-model="modelValue">
      <transition
        :name="`fade-in-${direction}`"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
      >
        <div
          v-show="modelValue"
          class="v-drawer"
          role="dialog"
          :class="[
            attrs.class,
            {
              'v-drawer--open': modelValue,
              [`v-drawer--direction-${direction}`]: direction,
              [`v-drawer--size-${size}`]: size,
              [`v-drawer--theme-${theme}`]: theme
            }
          ]"
          @click="onClose"
        >
          <div class="v-drawer__dialog">
            <div
              class="v-drawer__content"
              @click.stop
            >
              <v-button-empty
                class="v-drawer__close-button"
                @click="onClose"
              >
                <v-icon
                  icon="close"
                  size="large"
                />
              </v-button-empty>

              <div
                v-if="isVisibleHeader"
                class="v-drawer__header"
              >
                <h3 class="v-drawer__title">
                  {{ title }}
                </h3>

                <slot
                  name="header"
                  :close="onClose"
                />
              </div>

              <div class="v-drawer__body">
                <v-scrollbar class="v-drawer__body-scrollbar">
                  <slot :close="onClose"/>
                </v-scrollbar>
              </div>

              <div
                v-if="slots?.footer"
                class="v-drawer__footer"
              >
                <slot
                  name="footer"
                  :close="onClose"
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </v-backdrop>
  </teleport>
</template>

<script lang="ts" setup>
  import type { IVDrawerProps, IVDrawerEmits, IVDrawerSlots } from './types';
  import { VBackdrop } from '../Backdrop';
  import { VButtonEmpty } from '../Button';
  import { VScrollbar } from '../Scrollbar';
  import { VIcon } from '../Icons';
  import { useDialog } from '../../composables';
  import { computed, watch, useAttrs } from 'vue';

  const props = withDefaults(defineProps<IVDrawerProps>(), {
    appendToBody: true,
    direction: 'left'
  });

  const emit = defineEmits<IVDrawerEmits>();

  const slots = defineSlots<IVDrawerSlots>();

  const modelValue = defineModel<boolean>({
    required: true
  });

  const attrs = useAttrs();

  const { onClose } = useDialog(modelValue);

  const isVisibleHeader = computed<boolean>(() => !!props.title || !!slots?.header);

  function afterEnter (payload: Element) {
    emit('opened', payload);
  }

  function afterLeave (payload: Element) {
    emit('closed', payload);
  }

  watch(modelValue, value => {
    if (value) {
      emit('open');
    } else {
      emit('close');
    }
  });

  defineOptions({
    inheritAttrs: false
  });
</script>

<style lang="scss">
  .v-drawer {
    --v-drawer-bg: transparent;
    --v-drawer-max-width: auto;
    --v-drawer-padding: 0;
    --v-drawer-padding-y: var(--v-drawer-padding);
    --v-drawer-padding-x: var(--v-drawer-padding);

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1050;

    display: flex;
    overflow: hidden;

    @include breakpoints-prop (size) {
      &-large {
        --v-drawer-max-width: 665px;
        --v-drawer-padding: var(--gutter-18);
      }

      &-medium {
        --v-drawer-max-width: 550px;
        --v-drawer-padding: var(--gutter-16);
      }

      &-small {
        --v-drawer-max-width: 415px;
        --v-drawer-padding: var(--gutter-14);
      }
    }

    &--theme {
      &-primary {
        --v-drawer-bg: var(--color-white);
      }
    }

    &--direction {
      &-left {
        justify-content: flex-start;
      }

      &-right {
        justify-content: flex-end;
      }

      &-up {
        --v-drawer-max-width: none;

        flex-direction: column;
        justify-content: flex-start;
      }

      &-down {
        --v-drawer-max-width: none;

        flex-direction: column;
        justify-content: flex-end;
      }
    }

    &__dialog {
      position: relative;

      width: 100%;
      max-width: var(--v-drawer-max-width);
      max-height: 100%;

      background-color: var(--v-drawer-bg);
    }

    &__close-button {
      position: absolute;
      top: 0;
      right: 0;
    }

    &__content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    &__title {
      margin-bottom: 0;
    }

    &__body {
      flex: 1;
      overflow: hidden;

      &-scrollbar {
        height: 100%;
      }
    }
  }
</style>
