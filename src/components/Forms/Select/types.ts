import type { ComputedRef, ModelRef } from 'vue';
import type { ISizeProp, IThemeProp } from '../../../props';
import type { Maybe } from '../../../types';
import type { IVDropdownEmits } from '../../Dropdown/types';

export type IVOptionValue = string | number;
export type IVSelectModelValue = Maybe<IVOptionValue>;

export interface IVOptionProps {
  value: IVOptionValue;
  title?: string;
  disabled?: boolean;
}

export interface IVOptionInstance {
  uid: string;
  props: IVOptionProps;
}

export interface IVOptionSlots {
  default: (props: {
    isActive: boolean;
    isDisabled: boolean;
  }) => any;
}

export type IVSelectProps = {
  modelValue: IVSelectModelValue;
  disabled?: boolean;
  title?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>

export interface IVSelectEmits extends IVDropdownEmits {
  (event: 'change', payload: IVSelectModelValue): void;
}

export interface IVSelectContext {
  props: IVSelectProps;
  modelValue: ModelRef<IVSelectModelValue>;
  hasValue: ComputedRef<boolean>;
  isDisabled: ComputedRef<boolean>;
  onChange: (value: IVSelectModelValue) => void;
  registerOption: (option: IVOptionInstance) => void;
  unregisterOption: (option: IVOptionInstance) => void;
}

export interface IVSelectInstance {
  setVisible: (payload: boolean) => void;
}

export interface IVSelectExpose {
  setVisible: (payload: boolean) => void;
}
