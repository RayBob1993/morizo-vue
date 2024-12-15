import type { IDirectionProp, IThemeProp, ISizeProp } from '../../../props';
import type { Maybe } from '../../../types';

export type IVRadioValue = number | string;
export type IVRadioModelValue = Maybe<IVRadioValue>;

export type IVRadioProps = {
  modelValue: IVRadioModelValue;
  value: IVRadioValue;
  label?: string;
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>

export interface IVRadioGroupProps extends IDirectionProp {}
