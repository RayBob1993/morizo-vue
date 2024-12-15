import type { IThemeProp, ISizeProp, ITagProp, IWeightProp, IFamilyProp, IAlignProp } from '../../props';

export type IVTextProps = {
  uppercase?: boolean;
  content?: string | number;
} & Partial<IThemeProp> & Partial<ISizeProp> & Partial<ITagProp> & Partial<IWeightProp> & Partial<IFamilyProp> & Partial<IAlignProp>;
