import type { ISizeProp, IThemeProp } from '../../props';

export type IVDrawerDirection = 'left' | 'right' | 'up' | 'down';

export type IVDrawerProps = {
  modelValue: boolean;
  appendToBody?: boolean;
  title?: string;
  direction?: IVDrawerDirection;
} & Partial<IThemeProp> & Partial<ISizeProp>

export interface IVDrawerEmits {
  (event: 'opened', payload: Element): void;
  (event: 'closed', payload: Element): void;
  (event: 'open'): void;
  (event: 'close', ): void;
}

export interface IVDrawerSlots {
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
