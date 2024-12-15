export enum MaskTypesList {
  phone = 'phone',
  date = 'date'
}

export type IMaskTypes = keyof typeof MaskTypesList;
