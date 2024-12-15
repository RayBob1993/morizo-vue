import type { ComputedRef, Ref } from 'vue';
import type { ValidateError } from 'async-validator';
import type { TemplateRef } from '../../../types';
import type { IVFormRules } from '../Form/types';

export interface IAsyncValidationError {
  errors: Array<ValidateError>;
  fields: Record<string, Array<ValidateError>>;
}

export interface IVFormItemField {
  reset: () => void;
}

export interface IVFormItemProps {
  disabled?: boolean;
  prop?: keyof IVFormRules;
  title?: string;
}

export interface IVFormItemSlots {
  default?: (props: {
    validationStatus: IVFormItemValidationStatus;
  }) => any;
}

export interface IVFormItemValidationStatus {
  isError: boolean;
  isValidating: boolean;
  isSuccess: boolean;
}

export interface IVFormItemErrorsProps {
  errors: Array<ValidateError>;
}

export interface IVFormItemContext {
  props: IVFormItemProps;
  validationStatus: Ref<IVFormItemValidationStatus>;
  registerField: (field: IVFormItemField) => void;
  unregisterField: () => void;
  isRequired: ComputedRef<boolean>;
  validate: (silent?: boolean) => Promise<boolean>;
  clearValidate: () => void;
  reset: () => void;
}

export interface IVFormItemInstance {
  uid: string;
  el: TemplateRef<HTMLDivElement>;
  isValidatable: ComputedRef<boolean>;
  props: IVFormItemProps;
  setErrors: (errors: Array<string>) => void;
  validationStatus: Ref<IVFormItemValidationStatus>;
  validate: (silent?: boolean) => Promise<boolean>;
  clearValidate: () => void;
  reset: () => void;
}

export interface IVFormItemExpose {
  validate: (silent?: boolean) => Promise<boolean>;
  clearValidate: () => void;
  reset: () => void;
}
