/**
 * Checks if the given function is an arrow function.
 * @param fn - The function to check.
 * @returns {boolean} True if fn is an arrow function.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isArrowFunction = (fn: Function): boolean => !fn.name || fn.name === 'anonymous';

/**
 * Checks if the given function is a named function.
 * @param fn - The function to check.
 * @returns {boolean} True if fn is a named function.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isNamedFunction = (fn: Function): boolean => !!fn.name && fn.name !== 'anonymous';

/**
 * Checks if the given value is a function.
 * @param value - The value to check.
 * @returns {boolean} True if value is a function.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isFunction = (value: unknown): value is Function => typeof value === 'function';
