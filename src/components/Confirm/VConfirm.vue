<template>
  <v-backdrop v-model="isVisible">
    <transition
      name="fade-in-up"
      @after-leave="onClose"
    >
      <div
        v-show="isVisibleConfirm"
        class="v-confirm"
        role="dialog"
        :class="{
          [`v-confirm--theme-${theme}`]: theme
        }"
      >
        <div class="v-confirm__header">
          <v-button-empty @click="setVisibleConfirm(false);">
            X
          </v-button-empty>

          {{ title }}
        </div>

        <div class="v-confirm__body">
          {{ message }}
        </div>

        <div class="v-confirm__footer">
          <v-button @click="setVisibleConfirm(false);">
            Ок
          </v-button>

          <v-button @click="setVisibleConfirm(false);">
            Отмена
          </v-button>
        </div>
      </div>
    </transition>
  </v-backdrop>
</template>

<script lang="ts" setup>
  import type { IVConfirmProps, IVConfirmEmits } from './types';
  import { VBackdrop } from '../Backdrop';
  import { VButton, VButtonEmpty } from '../Button';
  import { useToggle } from '../../composables';
  import { onMounted, watch } from 'vue';

  defineProps<IVConfirmProps>();

  const emit = defineEmits<IVConfirmEmits>();

  const [isVisible, setVisible] = useToggle();
  const [isVisibleConfirm, setVisibleConfirm] = useToggle();

  function onClose () {
    emit('cansel');
  }

  watch(isVisible, setVisibleConfirm);

  onMounted(() => {
    setVisible(true);
  });
</script>

<style lang="scss">
  .v-confirm {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 100%;
    max-width: 420px;

    background-color: var(--color-white);
  }
</style>
