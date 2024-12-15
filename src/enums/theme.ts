export enum ThemeList {
  base = 'base',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  danger = 'danger',
  success = 'success',
  warning = 'warning'
}

export type IThemes = keyof typeof ThemeList;
