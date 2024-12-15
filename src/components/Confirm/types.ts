import type { IThemeProp } from '../../props';

export type IVConfirmProps = {
  title?: string;
  message?: string;
} & Partial<IThemeProp>;

export interface IVConfirmEmits {
  (event: 'success'): void;
  (event: 'cansel'): void;
}
