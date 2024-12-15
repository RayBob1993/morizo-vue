import { VConfigProviderContextKey } from '../../keys';
import { ru } from '../../locale';
import { inject } from 'vue';

export const useConfigProviderContext = () => inject(VConfigProviderContextKey, {
  locale: ru,
  direction: 'ltr'
});
