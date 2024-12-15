import type { ModelRef } from 'vue';
import type { Rule } from 'async-validator';
import type {IVFormItemInstance} from '../FormItem/types';

export type IVFormModelValues = any;

export type IVFormModel = Record<string, IVFormModelValues>;

export type IVFormRules<T = unknown> = Partial<Record<T extends object ? keyof T : string, Rule>>;

export type IVFormValidationResult = Promise<boolean>;

export interface IVFormProps {
  modelValue: IVFormModel;
  rules?: IVFormRules;
  disabled?: boolean;
  scrollToError?: boolean;
  scrollIntoViewOptions?: ScrollIntoViewOptions;
}

export interface IVFormSlots {
  default?: (props: {
    isValid: boolean;
  }) => void;
}

export interface IVFormContext {
  props: IVFormProps;
  modelValue: ModelRef<IVFormModel>;
  registerFormItem: (newFormItem: IVFormItemInstance) => void;
  unregisterFormItem: (oldFormItem: IVFormItemInstance) => void;
}

export interface IVFormInstance {
  validate: (silent?: boolean) => IVFormValidationResult;
  clearValidate: () => void;
  reset: () => void;
  setErrors: (errors: Record<string, string[]>) => void;
}

export interface IVFormExpose extends IVFormInstance {

}
