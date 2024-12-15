import type { ModelRef } from 'vue';
import type { IVCheckboxProps, IVCheckboxModelValue } from '../types';
import { useForm } from '../composables';
import { isBoolean } from '../utils';
import { computed } from 'vue';

function useStatuses (props: IVCheckboxProps, modelValue: ModelRef<IVCheckboxModelValue>) {
  const { isFormDisabled, validationStatus } = useForm();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);

  const isChecked = computed<boolean>(() => {
    if (isBoolean(modelValue.value)) {
      return modelValue.value;
    }

    if (props.value && !isBoolean(props.value) && Array.isArray(modelValue.value)) {
      return modelValue.value.includes(props.value);
    }

    return (props.value && modelValue.value) === props.value;
  });

  return {
    isDisabled,
    isChecked,
    validationStatus
  };
}

export function useCheckbox (props: IVCheckboxProps, modelValue: ModelRef<IVCheckboxModelValue>) {
  const { isDisabled, isChecked, validationStatus } = useStatuses(props, modelValue);

  return {
    isDisabled,
    isChecked,
    validationStatus
  };
}
