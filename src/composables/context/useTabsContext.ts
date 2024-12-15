import { VTabsContextKey } from '../../keys';
import { inject } from 'vue';

export const useTabsContext = () => inject(VTabsContextKey);
