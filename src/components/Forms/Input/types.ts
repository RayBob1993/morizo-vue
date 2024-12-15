import type { IInputTypes, IInputNativeTypes, IInputMode } from '../../../enums';
import type { ISizeProp, IThemeProp } from '../../../props';
import type { Maybe, TemplateRef } from '../../../types';

export type IVInputNative = HTMLInputElement | HTMLTextAreaElement;

export type IVInputModelValue = Maybe<string>;

export type IVInputBaseProps = {
  disabled?: boolean;
  readonly?: boolean;
  autocomplete?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>

export type IVInputProps = {
  modelValue: IVInputModelValue;
  type?: IInputTypes;
  nativeType?: IInputNativeTypes;
  showRequired?: boolean;
  title?: string;
  inputMode?: IInputMode;
} & IVInputBaseProps

export interface IVInputInstance {
  input: Maybe<IVInputNative>;
  focus: () => void;
}

export interface IVInputEmits {
  (event: 'focusin', payload: Event): void;
  (event: 'focusout', payload: Event): void;
}

export interface IVInputScopedSlots {
  isFilled: boolean;
  isFocus: boolean;
}

export interface IVInputSlots {
  default?: (props: IVInputScopedSlots) => any;
  before?: (props: IVInputScopedSlots) => any;
  after?: (props: IVInputScopedSlots) => any;
}

export interface IVInputExpose {
  input: TemplateRef<IVInputNative>;
  focus: () => void;
}
