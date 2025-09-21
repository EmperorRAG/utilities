import { isValueArrayOfStringable } from '../types/array/array.types';
import { isValueObject } from '../types/object/object.types';
import type { Stringable } from '../types/stringable/stringable.types';

/**
 * Converts a value or array of values that are "Stringable" to their string representations.
 *
 * - If the input is an array, each element is converted to a string using `String()`, unless it is a plain object,
 *   in which case it is stringified using `JSON.stringify()`.
 * - If the input is a single value, it is converted to a string using `String()` or `JSON.stringify()` for plain objects.
 *
 * @param value - The value or array of values to convert. Must be a `Stringable` or an array of `Stringable` values.
 *   - `Stringable` is typically a string, number, boolean, or an object with a custom `toString()` method.
 * @returns
 *   - If the input is an array, returns an array of strings with each element converted.
 *   - If the input is a single value, returns its string representation.
 *
 * @remarks
 * - If an object has a custom `toString()` method (not the default from `Object.prototype`), it will be used.
 * - If an object does not have a custom `toString()`, it will be stringified using `JSON.stringify()`.
 * - For primitive values, `String(value)` is used.
 *
 * @example
 * ```ts
 * toString(42); // "42"
 * toString([1, 2, 3]); // ["1", "2", "3"]
 * toString({ foo: "bar" }); // '{"foo":"bar"}'
 * toString([{ foo: "bar" }, 7]); // ['{"foo":"bar"}', "7"]
 * ```
 */
export function toString(value: Stringable): string;
/**
 * Converts an array of Stringable values to an array of strings.
 *
 * @param value - An array of values to convert.
 * @returns An array of string representations.
 */
export function toString(value: Stringable[]): string[];
/**
 * Converts a Stringable value or an array of Stringable values to their string representations.
 *
 * @param value - The value or array of values to convert.
 * @returns A string or array of strings, depending on the input.
 *
 * @see toString
 */
export function toString(value: Stringable | Stringable[]): string | string[] {
	if (isValueArrayOfStringable(value)) {
		return value.map((v) => {
			if (isValueObject(v) && typeof v.toString === 'function' && v.toString !== Object.prototype.toString) {
				// eslint-disable-next-line @typescript-eslint/no-base-to-string
				return String(v);
			}
			if (isValueObject(v)) {
				return JSON.stringify(v);
			}
			return String(v);
		});
	}
	if (isValueObject(value) && typeof value.toString === 'function' && value.toString !== Object.prototype.toString) {
		// eslint-disable-next-line @typescript-eslint/no-base-to-string
		return String(value);
	}
	if (isValueObject(value)) {
		return JSON.stringify(value);
	}
	return String(value);
}
