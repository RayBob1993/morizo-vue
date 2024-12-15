import type { IFlexAlign } from '../../../../enums';

export type ISizeValues = 0 | 1 | 2 | 25 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type IColSize = ISizeValues | 'auto' | 'default';
export type IOffsetSize = ISizeValues;

export interface IVColProps {
  size?: IColSize;
  sizeXs?: IColSize;
  sizeSm?: IColSize;
  sizeMd?: IColSize;
  sizeLg?: IColSize;
  sizeXl?: IColSize;
  sizeXxl?: IColSize;
  order?: number;
  orderXs?: number;
  orderSm?: number;
  orderMd?: number;
  orderLg?: number;
  orderXl?: number;
  orderXxl?: number;
  offset?: IOffsetSize;
  offsetXs?: IOffsetSize;
  offsetSm?: IOffsetSize;
  offsetMd?: IOffsetSize;
  offsetLg?: IOffsetSize;
  offsetXl?: IOffsetSize;
  offsetXxl?: IOffsetSize;
  align?: IFlexAlign;
  alignXs?: IFlexAlign;
  alignSm?: IFlexAlign;
  alignMd?: IFlexAlign;
  alignLg?: IFlexAlign;
  alignXl?: IFlexAlign;
  alignXxl?: IFlexAlign;
}
