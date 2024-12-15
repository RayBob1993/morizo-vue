import type { IVFormItemValidationStatus, Maybe } from '../types';
import { useFormContext, useFormItemContext } from './context';
import { computed } from 'vue';

export function useForm () {
  const Form = useFormContext();
  const FormItem = useFormItemContext();

  const isFormDisabled = computed<boolean>(() => !!(Form?.props.disabled || FormItem?.props.disabled));
  const isRequired = computed<boolean>(() => !!FormItem?.isRequired.value);
  const validationStatus = computed<Maybe<IVFormItemValidationStatus>>(() => FormItem?.validationStatus.value);

  return {
    Form,
    FormItem,
    isFormDisabled,
    validationStatus,
    isRequired
  };
}
