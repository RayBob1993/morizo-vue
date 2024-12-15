import type { ISizeProp, IThemeProp } from '../../../props';
import type { Maybe } from '../../../types';

export interface IVRangeValue {
  min: Maybe<number>;
  max: Maybe<number>;
}

export interface IVRangeFormat {
  prefixFrom?: string;
  prefixTo?: string;
  suffix?: string;
}

export interface IVRangeEmits {
  (event: 'change', payload: IVRangeValue): void;
}

export type IVInputRangeProps = {
  modelValue: IVRangeValue;
  min?: number;
  max?: number;
  disabled?: boolean;
  step?: number;
  format?: IVRangeFormat;
} & Partial<IThemeProp> & Partial<ISizeProp>
