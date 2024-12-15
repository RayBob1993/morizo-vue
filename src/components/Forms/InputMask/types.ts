import type { IVInputProps, IVInputInstance } from '../Input/types';
import type Inputmask from 'inputmask/index';
import type { IMaskTypes } from '../../../enums';
import type { TemplateRef } from '../../../types';

export interface IVInputMaskProps extends Omit<IVInputProps, 'type'> {
  mask?: Inputmask.Options;
  maskType?: IMaskTypes;
}

export interface IVInputMaskInstance {
  input: IVInputInstance;
}

export interface IVInputMaskExpose {
  input: TemplateRef<IVInputInstance>;
}
