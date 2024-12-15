export enum FlexJustifyList {
  start = 'start',
  center = 'center',
  end = 'end',
  baseline = 'baseline',
  stretch = 'stretch',
  between = 'between',
  around = 'around'
}

export type IFlexJustify = keyof typeof FlexJustifyList;
