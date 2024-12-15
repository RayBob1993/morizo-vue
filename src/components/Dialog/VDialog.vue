<template>
  <teleport
    to="#teleports"
    :disabled="!appendToBody"
  >
    <v-backdrop v-model="modelValue">
      <transition
        name="fade-in-down"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
      >
        <div
          v-show="modelValue"
          class="v-dialog"
          role="dialog"
          :class="[
            attrs.class,
            {
              'v-dialog--open': modelValue,
              'v-dialog--center': center,
              [`v-dialog--size-${size}`]: size,
              [`v-dialog--theme-${theme}`]: theme
            }
          ]"
          @click="onClose"
        >
          <div class="v-dialog__dialog">
            <div
              class="v-dialog__content"
              @click.stop
            >
              <v-button-empty
                class="v-dialog__close-button"
                @click="onClose"
              >
                <v-icon
                  icon="close"
                  size="large"
                />
              </v-button-empty>

              <div
                v-if="isHeaderVisible"
                class="v-dialog__header"
              >
                <slot
                  name="header"
                  :close="onClose"
                >
                  <h3 class="v-dialog__title">
                    {{ title }}
                  </h3>
                </slot>
              </div>

              <div class="v-dialog__body">
                <slot :close="onClose"/>
              </div>

              <div
                v-if="slots?.footer"
                class="v-dialog__footer"
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
  import type { IVDialogProps, IVDialogEmits, IVDialogSlots } from './types';
  import { VBackdrop } from '../Backdrop';
  import { VButtonEmpty } from '../Button';
  import { VIcon } from '../Icons';
  import { useDialog } from '../../composables';
  import { computed, watch, useAttrs } from 'vue';

  const props = withDefaults(defineProps<IVDialogProps>(), {
    appendToBody: true,
    center: true
  });

  const emit = defineEmits<IVDialogEmits>();

  const slots = defineSlots<IVDialogSlots>();

  const modelValue = defineModel<boolean>({
    required: true
  });

  const attrs = useAttrs();

  const { onClose } = useDialog(modelValue);

  const isHeaderVisible = computed<boolean>(() => !!props.title || !!slots?.header);

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
  .v-dialog-open {
    overflow: hidden;
  }

  .v-dialog {
    --v-dialog-max-width: auto;
    --v-dialog-gap-x: var(--gutter-16);
    --v-dialog-gap-y: var(--gutter-40);
    --v-dialog-header-padding: 0;
    --v-dialog-header-padding-x: var(--v-dialog-header-padding);
    --v-dialog-header-padding-y: var(--v-dialog-header-padding);
    --v-dialog-body-padding: 0;
    --v-dialog-body-padding-x: var(--v-dialog-body-padding);
    --v-dialog-body-padding-y: var(--v-dialog-body-padding);
    --v-dialog-footer-padding: 0;
    --v-dialog-footer-padding-x: var(--v-dialog-footer-padding);
    --v-dialog-footer-padding-y: var(--v-dialog-footer-padding);
    --v-dialog-border-radius: 0;
    --v-dialog-bg-color: transparent;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1050;

    overflow-x: hidden;
    overflow-y: auto;

    &--center {
      .v-dialog__dialog {
        display: flex;
        align-items: center;
        min-height: calc(100% - var(--v-dialog-gap-y) * 2);
      }
    }

    &--theme {
      &-secondary {
        --v-dialog-bg-color: var(--color-white);
      }
    }

    &--size {
      &-small {
        --v-dialog-max-width: 355px;
      }

      &-medium {
        --v-dialog-max-width: 450px;
      }

      &-large {
        --v-dialog-max-width: 900px;
      }
    }

    &__dialog {
      margin: var(--v-dialog-gap-y) auto;
      width: 100%;
      max-width: calc(var(--v-dialog-max-width) + var(--v-dialog-gap-x) * 2);
    }

    &__content {
      position: relative;

      display: flex;
      flex-flow: column nowrap;
      margin: 0 var(--v-dialog-gap-x);
      width: 100%;

      background-color: var(--v-dialog-bg-color);
      border-radius: var(--v-dialog-border-radius);
    }

    &__close-button {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
    }

    &__header {
      position: relative;

      padding: var(--v-dialog-header-padding-y) var(--v-dialog-header-padding-x);
    }

    &__title {
      margin-bottom: 0;
    }

    &__body {
      flex: 1;
      padding: var(--v-dialog-body-padding-y) var(--v-dialog-body-padding-x);
      overflow: hidden;
    }

    &__footer {
      padding: var(--v-dialog-footer-padding-y) var(--v-dialog-footer-padding-x);
    }
  }
</style>
