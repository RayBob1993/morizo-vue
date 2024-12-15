import type { IVLocale } from '../../types';

export const en: IVLocale = {
  name: 'en_US',
  el: {
    form: {
      validation: {
        rules: {
          required: 'This field is required',
          email: 'Invalid email address format. Example: test@mail.ru',
          phone: 'The phone number does not match the specified format, the prefix may consist of the values: +74, +78, +79',
          search: 'The minimum length of the request must be at least 3 characters',
          maxLength: 'Maximum field length is 100 characters',
          boolean: 'This field is required to select',
          ruLetters: 'Invalid input format. Symbols must be Аа-Яя',
          password: {
            length: 'The password length must be at least 6 characters.',
            pattern: 'The password must contain at least 1 number, 1 uppercase and 1 lowercase Latin letter',
            confirm: 'Confirm password does not match new password'
          }
        }
      }
    }
  }
};
