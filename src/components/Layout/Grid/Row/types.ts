import type { IFlexAlign, IFlexJustify } from '../../../../enums';

export interface IVRowProps {
  justify?: IFlexJustify;
  justifyXs?: IFlexJustify;
  justifySm?: IFlexJustify;
  justifyMd?: IFlexJustify;
  justifyLg?: IFlexJustify;
  justifyXl?: IFlexJustify;
  justifyXxl?: IFlexJustify;
  align?: IFlexAlign;
  alignXs?: IFlexAlign;
  alignSm?: IFlexAlign;
  alignMd?: IFlexAlign;
  alignLg?: IFlexAlign;
  alignXl?: IFlexAlign;
  alignXxl?: IFlexAlign;
  guttersX?: boolean;
  guttersY?: boolean;
  wrap?: boolean;
}
