import type { ISizeProp, IThemeProp } from '../../../props';

export type IVInputNumberModelValue = number;

export type IVInputNumberProps = {
  modelValue?: IVInputNumberModelValue;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>

export interface IVInputNumberEmits {
  (event: 'change', payload: IVInputNumberModelValue): void;
}
