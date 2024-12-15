import type { IVInputBaseProps, IVInputModelValue } from '../Input/types';

export type IVInputCodeMapValues = Map<number, string | undefined>;

export interface IVInputCodeProps extends IVInputBaseProps {
  modelValue: IVInputModelValue;
  codeLength?: number;
}

export interface IVInputCodeEmits {
  (event: 'update:model-value', payload: IVInputModelValue): void;
}

export interface IVInputCodeExpose {
  setFocus: () => void;
}

export interface IVInputCodeInstance {
  setFocus: () => void;
}
