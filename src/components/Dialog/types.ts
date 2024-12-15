import type { ISizeProp, IThemeProp } from '../../props';

export type IVDialogProps = {
  modelValue: boolean;
  appendToBody?: boolean;
  title?: string;
  center?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>

export interface IVDialogEmits {
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close', ): void;
}

export interface IVDialogSlots {
  default?: (props: {
    close: () => void;
  }) => any;
  header?: (props: {
    close: () => void;
  }) => any;
  footer?: (props: {
    close: () => void;
  }) => any;
}
