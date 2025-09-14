/**
 * Converts an array of values into an array of objects, where each object has one property
 * with the property name provided as input and its value being the corresponding value from the array.
 * This function is pure and does not mutate any external state.
 *
 * @param propertyName - The property name to use for each object.
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the specified property name and values.
 *
 * Example usage:
 *   toObjects('input', [1, 2, 3]);
 *   // [ { input: 1 }, { input: 2 }, { input: 3 } ]
 */
export const toObjects = <K extends string, T>(propertyName: K, values: T[]): Record<K, T>[] =>
	values.map((value) => ({ [propertyName]: value }) as Record<K, T>);

/**
 * Converts an array of values into an array of objects with the property name 'input'.
 * This is a curried version of toObjects with propertyName preset to 'input'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'input' and corresponding values.
 *
 * Example usage:
 *   toInputObjects([1, 2, 3]);
 *   // [ { input: 1 }, { input: 2 }, { input: 3 } ]
 */
export const toInputObjects = <T>(values: T[]): { input: T }[] => toObjects<'input', T>('input', values);

/**
 * Converts an array of values into an array of objects with the property name 'label'.
 * This is a curried version of toObjects with propertyName preset to 'label'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'label' and corresponding values.
 *
 * Example usage:
 *   toLabelObjects(['foo', 'bar']);
 *   // [ { label: 'foo' }, { label: 'bar' } ]
 */
export const toLabelObjects = <T>(values: T[]): { label: T }[] => toObjects<'label', T>('label', values);

/**
 * Converts an array of values into an array of objects with the property name 'expected'.
 * This is a curried version of toObjects with propertyName preset to 'expected'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'expected' and corresponding values.
 *
 * Example usage:
 *   toExpectedObjects([true, false]);
 *   // [ { expected: true }, { expected: false } ]
 */
export const toExpectedObjects = <T>(values: T[]): { expected: T }[] => toObjects<'expected', T>('expected', values);

/**
 * Converts an array of values into an array of objects with the property name 'name'.
 * This is a curried version of toObjects with propertyName preset to 'name'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'name' and corresponding values.
 */
export const toNameObjects = <T>(values: T[]): { name: T }[] => toObjects<'name', T>('name', values);

/**
 * Converts an array of values into an array of objects with the property name 'value'.
 * This is a curried version of toObjects with propertyName preset to 'value'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'value' and corresponding values.
 */
export const toValueObjects = <T>(values: T[]): { value: T }[] => toObjects<'value', T>('value', values);

/**
 * Converts an array of values into an array of objects with the property name 'key'.
 * This is a curried version of toObjects with propertyName preset to 'key'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'key' and corresponding values.
 */
export const toKeyObjects = <T>(values: T[]): { key: T }[] => toObjects<'key', T>('key', values);

/**
 * Converts an array of values into an array of objects with the property name 'options'.
 * This is a curried version of toObjects with propertyName preset to 'options'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'options' and corresponding values.
 */
export const toOptionsObjects = <T>(values: T[]): { options: T }[] => toObjects<'options', T>('options', values);

/**
 * Converts an array of values into an array of objects with the property name 'defaultValue'.
 * This is a curried version of toObjects with propertyName preset to 'defaultValue'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'defaultValue' and corresponding values.
 */
export const toDefaultValueObjects = <T>(values: T[]): { defaultValue: T }[] => toObjects<'defaultValue', T>('defaultValue', values);
