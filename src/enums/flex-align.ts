export enum FlexAlignList {
  start = 'start',
  center = 'center',
  end = 'end',
  baseline = 'baseline',
  stretch = 'stretch'
}

export type IFlexAlign = keyof typeof FlexAlignList;
