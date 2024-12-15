export enum InputModes {
  numeric = 'numeric',
  tel = 'tel',
  text = 'text',
  decimal = 'decimal',
  search = 'search',
  email = 'email',
  none = 'none',
  url = 'url' ,
}

export type IInputMode = keyof typeof InputModes;