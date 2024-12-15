import type { ModelRef } from 'vue';
import type { IVRadioProps, IVRadioModelValue } from '../types';
import { useForm } from '../composables';
import { computed } from 'vue';

function useStatuses (props: IVRadioProps, modelValue: ModelRef<IVRadioModelValue>) {
  const { validationStatus, isFormDisabled } = useForm();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);
  const isChecked = computed<boolean>(() => modelValue.value === props.value);

  return {
    isDisabled,
    isChecked,
    validationStatus
  };
}

export function useRadio (props: IVRadioProps, modelValue: ModelRef<IVRadioModelValue>) {
  const { isDisabled, isChecked, validationStatus } = useStatuses(props, modelValue);

  return {
    isDisabled,
    isChecked,
    validationStatus
  };
}
