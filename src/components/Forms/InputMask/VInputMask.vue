<template>
  <v-input
    ref="input"
    v-model="modelValue"
    class="v-input-mask"
    :input-mode="inputMode"
    v-bind="inputProps"
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

    <template
      v-if="slots?.after"
      #after="scopedSlots"
    >
      <slot
        name="after"
        v-bind="scopedSlots"
      />
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
  import type { IVInputMaskProps, IVInputMaskExpose } from './types';
  import type { IVInputInstance, IVInputModelValue, IVInputSlots } from '../Input/types';
  import type { IInputMode } from '../../../enums';
  import { getPhoneMaskOptions, getDateMaskOptions } from './utils';
  import { VInput } from '../Input';
  import { MaskTypesList, InputModes } from '../../../enums';
  import { omit } from '../../../utils';
  import { useTemplateRef, shallowRef, computed, onMounted } from 'vue';

  const props = defineProps<IVInputMaskProps>();

  const slots = defineSlots<IVInputSlots>();

  const modelValue = defineModel<IVInputModelValue>({
    required: true
  });

  const inputProps = computed(() => {
    return omit(props, [
      'mask',
      'maskType',
      'modelValue',
      'inputMode'
    ]);
  });

  const inputMode = computed<IInputMode | undefined>(() => {
    switch (props.maskType) {
      case MaskTypesList.date:
        return InputModes.numeric;
      case MaskTypesList.phone:
        return InputModes.tel;
      default:
        return props.inputMode;
    }
  });

  const input = useTemplateRef<IVInputInstance>('input');
  const maskInstance = shallowRef<Inputmask.Instance>();

  async function onInit () {
    const Mask = (await import('inputmask')).default;
    const inputElement = input.value?.input;
    const options = getMaskOptions();

    maskInstance.value = new Mask(options);

    if (maskInstance.value && inputElement) {
      maskInstance.value.mask(inputElement);
    }
  }

  function getMaskOptions () {
    switch (props.maskType) {
      case MaskTypesList.phone:
        return getPhoneMaskOptions();
      case MaskTypesList.date:
        return getDateMaskOptions();
      default:
        return props.mask ?? {};
    }
  }

  onMounted(() => {
    onInit();
  });

  defineExpose<IVInputMaskExpose>({
    input
  });
</script>
