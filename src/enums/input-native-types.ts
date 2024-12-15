export enum InputNativeTypesList {
  text = 'text',
  email = 'email',
  number = 'number',
  tel = 'tel',
  url = 'url',
  search = 'search',
  password = 'password'
}

export type IInputNativeTypes = keyof typeof InputNativeTypesList;
