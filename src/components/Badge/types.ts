import type { ISizeProp, IThemeProp } from '../../props';

export type IVBadgeProps = {
  content?: string | number;
  hidden?: boolean;
} & Partial<ISizeProp> & Partial<IThemeProp>
