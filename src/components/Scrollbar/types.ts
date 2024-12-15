import type { ISizeProp, IThemeProp } from '../../props';
import type { TemplateRef } from '../../types';

export type IVScrollbarProps = {
  vertical?: boolean;
  horizontal?: boolean;
  draggableMultiplier?: number;
  infiniteScrollOffset?: number;
  draggable?: boolean;
  hidden?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>

export interface IVScrollbarEmits {
  (event: 'scrollEndY'): void;
  (event: 'scrollEndX'): void;
  (event: 'scroll', payload: Event): void;
  (event: 'mousedown', payload: MouseEvent): void;
  (event: 'mouseleave', payload: MouseEvent): void;
  (event: 'mouseup', payload: MouseEvent): void;
  (event: 'mousemove', payload: MouseEvent): void;
}

export interface IVScrollbarExpose {
  el: TemplateRef<HTMLDivElement>;
}

export interface IVScrollbarInstance {
  el: HTMLDivElement | null;
}
