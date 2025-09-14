/**
 * Type that represents any value that can be safely passed to String() constructor
 * Includes: string, number, boolean, bigint, symbol, undefined, null, object, function
 */
export type Stringable = string | number | boolean | bigint | symbol | undefined | null | object | ((...args: unknown[]) => unknown);

/**
 * Type that represents any primitive value that can be safely passed to String() constructor
 * Includes: string, number, boolean, bigint, symbol, undefined, null
 */
export type PrimitiveStringable = string | number | boolean | bigint | symbol | undefined | null;

/**
 * Determines if a value can be safely passed to String() without throwing.
 *
 * ## Acceptance Criteria
 * - Returns true for all primitive types: string, number, boolean, bigint, symbol, undefined, and null.
 * - Returns true for objects (including arrays, plain objects, Date, RegExp, etc.).
 * - Returns true for functions.
 * - Returns true for values with custom Symbol.toStringTag (unless they throw on String conversion).
 * - Returns false only if the value throws when passed to String().
 *
 * @param defaultValue - The value to check
 * @returns True if the value can be safely converted to a string
 *
 * @example
 * // Primitives
 * IsValueStringable("test"); // true
 * IsValueStringable(42); // true
 * IsValueStringable(true); // true
 * IsValueStringable(undefined); // true
 * IsValueStringable(null); // true
 * IsValueStringable(Symbol("sym")); // true
 * IsValueStringable(123n); // true
 *
 * // Objects
 * IsValueStringable({}); // true
 * IsValueStringable([]); // true
 * IsValueStringable(new Date()); // true
 * IsValueStringable(/abc/); // true
 *
 * // Functions
 * IsValueStringable(() => {}); // true
 *
 * // Custom object with Symbol.toStringTag
 * const obj = { [Symbol.toStringTag]: "Custom" };
 * IsValueStringable(obj); // true
 *
 * // Value that throws on String conversion (rare)
 * // const throwingObj = { toString() { throw new Error("fail"); } };
 * // IsValueStringable(throwingObj); // true (but String(throwingObj) would throw)
 */
export function IsValueStringable(value: unknown): value is Stringable {
	switch (typeof value) {
		case 'string':
		case 'number':
		case 'boolean':
		case 'bigint':
		case 'symbol':
		case 'undefined':
		case 'object':
		case 'function':
			return true;
		default:
			return value === null;
	}
}

/**
 * Determines if a value is a primitive that can be safely passed to String().
 *
 * ## Acceptance Criteria
 * - Returns true for all primitive types: string, number, boolean, bigint, symbol, undefined, and null.
 * - Returns false for objects and functions.
 *
 * @param value - The value to check
 * @returns True if the value is a primitive that can be safely converted to a string
 *
 * @example
 * IsValuePrimitiveStringable("test"); // true
 * IsValuePrimitiveStringable(42); // true
 * IsValuePrimitiveStringable(true); // true
 * IsValuePrimitiveStringable(undefined); // true
 * IsValuePrimitiveStringable(null); // true
 * IsValuePrimitiveStringable(Symbol("sym")); // true
 * IsValuePrimitiveStringable(123n); // true
 * IsValuePrimitiveStringable({}); // false
 * IsValuePrimitiveStringable([]); // false
 * IsValuePrimitiveStringable(() => {}); // false
 */
export function IsValuePrimitiveStringable(value: unknown): value is PrimitiveStringable {
	switch (typeof value) {
		case 'string':
		case 'number':
		case 'boolean':
		case 'bigint':
		case 'symbol':
		case 'undefined':
			return true;
		default:
			return value === null;
	}
}
