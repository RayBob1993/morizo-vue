export enum InputTypesList {
  input = 'input',
  textarea = 'textarea'
}

export type IInputTypes = keyof typeof InputTypesList;
