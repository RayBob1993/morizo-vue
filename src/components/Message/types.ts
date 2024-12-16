import type { VNode } from 'vue';
import type { ISizes, IThemes, IMessagePosition } from '../../enums';

export type IVMessageProps = {
  title?: string;
  message: string | VNode;
  size?: ISizes;
  position?: IMessagePosition;
  theme?: IThemes;
}

export interface IVMessageEmits {
  (event: 'close'): void;
}

