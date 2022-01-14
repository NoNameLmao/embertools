/**
 * Get a pseudo-random number between "min" and "max" numbers. Includes both "min" and "max" numbers. Supports negative numbers.
 * @param {number} min Minimal value.
 * @param {number} max Maximal value.
 * @returns {number} A number between "min" and "max" values.
 * @example
 * console.log(getRandomArbitrary(69, 420)); // 243
 * console.log(getRandomArbitrary(-1337, 1337)); // -462
 */
export function getRandomArbitrary(min: number, max: number): number;
/**
 * Get a pseudo-random number from given value. Supports negative values.
 * @param {number} num A number. Cannot be equal to -1, 0 or 1
 * @returns {number} If "num" > 0, returns a random number between 0 and "num". Otherwise returns a random negative number between "num" and 0.
 * @example
 * console.log(getRandomInt(-300)) // -229
 * console.log(getRandomInt(1337)) // 592
 */
export function getRandomInt(num: number): number;
/**
 * Read a .json file and return parsed data from it.
 * @param {string} filePath Path to the .json file, can be relative or absolute.
 * @returns {Promise<any>} Parsed JSON data
 */
export function jsonRead(filePath: string): Promise<any>;
/**
 * Write data to a .json file.
 * @param {string} filePath Path to the .json file, can be relative or absolute.
 * @param {string[] | object[] | object} data Data to write to the .json file.
 * @returns {Promise<void>} Promise. If "fs" meets an error then the promise is rejected
 */
export function jsonWrite(filePath: string, data: string[] | object[] | object): Promise<void>;
/**
 * Limit a string's length to a certain number of characters.
 * @param {string} string String to limit .
 * @param {number} limit Length to limit the string to.
 * @returns {string} If string length is less than specified in "limit", returns the string itself. Otherwise returns string with the limited length.
 * @example
 * const string = 'Subscribe to technoblade'; // 24 characters long
 * console.log(limit(string, 20)); // 'Subscribe to techno…' ("…" is 1 character)
 */
export function limit(string: string, limit: number): string;
/**
 * Promisified version of "setTimeout()" for waiting a certain amount of milliseconds before executing the next line of code.
 * @param {number} ms Number of milliseconds to wait.
 * @returns {Promise<void>} void
 */
export function sleep(ms: number): Promise<void>;
export namespace characters {
    export { lowercase };
    export { uppercase };
    export { numbers };
    export const letters: string;
    export const all: string;
}
declare const lowercase: "abcdefghijklmnopqrstuvwxyz";
declare const uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
declare const numbers: "0123456789";
export {};