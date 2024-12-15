import type { SetupContext } from 'vue';

export function useListeners (attrs: SetupContext['attrs']) {
  const onRE = /^on[^a-z]/;
  const isOn = (key: string) => onRE.test(key);

  return {
    ...Object.fromEntries(Object.entries(attrs).filter(([key]) => isOn(key)))
  };
}
