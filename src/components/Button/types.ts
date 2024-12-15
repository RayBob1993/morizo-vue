import type { IDirectionProp, ISizeProp, IThemeProp, IUrlProp, ITargetProp, IButtonTypeProp } from '../../props';

export type IButtonBase = {
  plain?: boolean;
  wide?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;

export type IVButtonProps = {
  loading?: boolean;
  disabled?: boolean;
} & IButtonBase & Partial<IButtonTypeProp>

export type IVButtonLinkProps = IButtonBase & IUrlProp & Partial<ITargetProp>;

export interface IVButtonGroupProps extends IDirectionProp {}
