import type { ISizeProp, IThemeProp, IDirectionProp } from '../../../props';

export type IVCheckboxValue = number | string | boolean;
export type IVCheckboxModelValue = IVCheckboxValue | Array<number | string>;

export type IVCheckboxProps = {
  modelValue: IVCheckboxModelValue;
  value?: IVCheckboxValue;
  label?: string;
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>

export interface IVCheckboxGroupProps extends IDirectionProp {}
