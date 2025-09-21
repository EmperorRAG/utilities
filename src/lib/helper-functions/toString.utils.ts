import { isValueArrayOfStringable } from '../types/array/array.types';
import { isValueObject } from '../types/object/object.types';
import type { Stringable } from '../types/stringable/stringable.types';

/**
 * Converts a Stringable value or an array of Stringable values to string(s).
 * - If the input is an array, returns a string array with each element converted using String().
 * - If the input is not an array, returns the result of String(value).
 *
 * @param value - The value or array of values to convert.
 * @returns A string or array of strings.
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
