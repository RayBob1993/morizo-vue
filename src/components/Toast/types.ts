import type { IThemeProp } from '../../props';

export type IVToastProps = {
  title?: string;
  message: string;
  useHtml?: boolean;
  duration?: number;
  clearable?: boolean;
} & Partial<IThemeProp>

export interface IVToastEmits {
  (event: 'close'): void;
}
