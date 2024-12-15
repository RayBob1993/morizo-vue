export enum SizeList {
  mini = 'mini',
  small = 'small',
  medium = 'medium',
  large = 'large',
  big = 'big',
  huge = 'huge',
  massive = 'massive'
}

export type ISizes = keyof typeof SizeList;
