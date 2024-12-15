export type IVLocaleTranslate = {
  form: {
    validation: {
      rules: {
        required: string;
        email: string;
        phone: string;
        search: string;
        maxLength: string;
        boolean: string;
        ruLetters: string;
        password: {
          length: string;
          pattern: string;
          confirm: string;
        }
      }
    }
  }
}

export interface IVLocale {
  name: string;
  el: IVLocaleTranslate;
}

export interface IVConfigProviderProps {
  locale?: IVLocale;
  direction?: 'ltr' | 'rtl';
}

export interface IVConfigProviderContext extends IVConfigProviderProps {

}
