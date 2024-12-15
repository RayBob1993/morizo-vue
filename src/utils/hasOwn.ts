export const hasOwn = <O extends object>(object: O, key: keyof O): boolean => Object.prototype.hasOwnProperty.call(object, key);
