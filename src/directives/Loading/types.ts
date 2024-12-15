import type { ISizeProp, IThemeProp } from '../../props';

export type IVLoadingProps = {
  visible: boolean;
} & Partial<ISizeProp> & Partial<IThemeProp>;

export type IVLoadingDirectiveBind = boolean | IVLoadingProps;
