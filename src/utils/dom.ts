/**
 * @description **isElement** - Является ли элемент html элементом
 */
export const isElement = (element: HTMLElement) => (element && element.nodeType === Node.ELEMENT_NODE);

/**
 * @description **createElement** - Создать html элемент
 */
export const createElement = <K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K] => document.createElement<K>(tagName);

/**
 * @description **removeElement** - Удалить html элемент
 * @requires isElement
 */
export const removeElement = (element: HTMLElement) => isElement(element) && element.remove();
