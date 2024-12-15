<template>
  <v-input
    v-model="modelValue"
    class="v-input-password"
    v-bind="inputProps"
    :native-type="currentType"
  >
    <template
      v-if="slots?.before"
      #before="scopedSlots"
    >
      <slot
        name="before"
        v-bind="scopedSlots"
      />
    </template>

    <template #after>
      <v-button-empty @click="onToggleType">
        @
      </v-button-empty>
    </template>

    <template
      v-if="slots?.default"
      #default="scopedSlots"
    >
      <slot v-bind="scopedSlots"/>
    </template>
  </v-input>
</template>

<script lang="ts" setup>
  import type { IVInputPasswordProps } from './types';
  import type { IVInputModelValue, IVInputSlots } from '../Input/types';
  import { VInput } from '../Input';
  import { omit } from '../../../utils';
  import { VButtonEmpty } from '../../Button';
  import { InputNativeTypesList } from '../../../enums';
  import { ref, computed } from 'vue';

  const props = defineProps<IVInputPasswordProps>();

  const slots = defineSlots<IVInputSlots>();

  const modelValue = defineModel<IVInputModelValue>({
    required: true
  });

  const inputProps = computed(() => omit(props, ['modelValue']));

  const currentType = ref<InputNativeTypesList.password | InputNativeTypesList.text>(InputNativeTypesList.password);

  function onToggleType () {
    if (currentType.value === InputNativeTypesList.password) {
      currentType.value = InputNativeTypesList.text;
    } else {
      currentType.value = InputNativeTypesList.password;
    }
  }
</script>
