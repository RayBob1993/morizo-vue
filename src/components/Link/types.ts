import type { ISizeProp, IThemeProp, IUrlProp, ITargetProp } from '../../props';

export type IVLinkProps = {
  underline?: boolean;
  uppercase?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp> & IUrlProp & Partial<ITargetProp>
