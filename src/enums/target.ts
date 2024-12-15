export enum TargetList {
  _blank = '_blank',
  _parent = '_parent',
  _self = '_self',
  _top = '_top'
}

export type ITarget = keyof typeof TargetList;
