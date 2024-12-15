import type { ISizeProp, IThemeProp, IDirectionProp } from '../../props';

export type IVTagProps = Partial<IThemeProp> & Partial<ISizeProp>;

export interface IVTagEmits {
  (event: 'delete'): void;
}

export interface IVTagsGroupProps extends IDirectionProp {}
