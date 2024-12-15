export enum IconsList {
  check = 'check',
  close = 'close',
  mail = 'mail',
  heart = 'heart',
  'heart-fill' = 'heart-fill',
  'arrow-down' = 'arrow-down',
  'arrow-right' = 'arrow-right'
}

export type IIcon = keyof typeof IconsList;
