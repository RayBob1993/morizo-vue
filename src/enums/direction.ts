export enum DirectionList {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export type IDirection = keyof typeof DirectionList;
