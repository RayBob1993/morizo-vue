export enum FitList {
  cover = 'cover',
  contain = 'contain',
  fill = 'fill'
}

export type IFit = keyof typeof FitList;
