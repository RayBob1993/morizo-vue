import type { Maybe } from '../../types';
import type { ISizeProp, IThemeProp } from '../../props';

export type IVPriceProps = {
  old?: boolean;
  price: string | number;
  format?: Intl.NumberFormatOptions;
} & Partial<IThemeProp> & Partial<ISizeProp>

export interface IVPriceExpose {
  el: Ref<Maybe<HTMLDivElement>>;
}

export interface IVPriceInstance {
  el: Maybe<HTMLDivElement>;
}
