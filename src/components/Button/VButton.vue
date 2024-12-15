<template>
  <button
    :class="[
      classList,
      {
        'v-button--disabled': isDisabled,
        'v-button--loading': loading
      }
    ]"
    :disabled="isDisabled"
    :type="type"
  >
    <slot/>

    <v-spinner
      v-if="loading"
      class="v-button__spinner"
      size="small"
    />
  </button>
</template>

<script lang="ts" setup>
  import type { IVButtonProps } from './types';
  import { useBaseButtonClassList } from './useButton';
  import { VSpinner } from '../Spinner';
  import { useForm } from '../../composables';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<IVButtonProps>(), {
    type: 'button'
  });

  const { isFormDisabled } = useForm();

  const isDisabled = computed<boolean>(() => {
    return isFormDisabled.value ||
      props.loading ||
      props.disabled;
  });

  const classList = useBaseButtonClassList('v-button', props);
</script>

<style lang="scss">
  @import './button';
</style>
