import type { IFit } from '../../enums';
import type { Maybe } from '../../types';

export interface IVImageProps {
  fit?: IFit;
  src?: Maybe<string>;
  hasPlaceholder?: boolean;
  rounded?: boolean;
  center?: boolean;
  threshold?: number;
}

export interface IVImageEmits {
  (event: 'error', payload: Event): void;
  (event: 'load', payload: Event): void;
}
