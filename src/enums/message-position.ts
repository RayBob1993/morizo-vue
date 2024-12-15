export enum MessagePositionList {
  top = 'top',
  center = 'center',
  bottom = 'bottom',
}

export type IMessagePosition = keyof typeof MessagePositionList;
