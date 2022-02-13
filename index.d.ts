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
 * Promisified version of "setTimeout()" for waiting a certain amount of milliseconds before executing the next line of code.
 * @param {number} ms Number of milliseconds to wait. 
 * @returns {Promise<void>} void
 * @example
 * console.log('Hi!');
 * await sleep(5000);
 * console.log('Wait, are you leaving already?'); // runs after 5 seconds
 * 
 * // or...
 * sleep(10000).then(() => console.log('I have like 10s ping, what\'s wrong?'));
 */
export function sleep(ms: number): Promise<void>;
/**
 * Limit a string's length to a certain number of characters.
 * @param {string} string String to limit.
 * @param {number} limit Number to limit the string's length to.
 * @returns {string} If string length is less than specified in "limit", returns the string itself. Otherwise returns string with the limited length.
 * @example
 * const string = 'Subscribe to technoblade'; // 24 characters long
 * console.log(limit(string, 20)); // 'Subscribe to techno…' ("…" is 1 character)
 */
export function limit(string: string, limit: number): string;
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
 * Shuffle an array in pseudo-random order.
 * @param {any[]} array Array to shuffle.
 * @returns {any[]} Shuffled array.
 */
export function shuffleArray(array: any[]): any[];
/**
 * Pseudo-random chance function.
 * @param {number} number Chance in percentage to return 'true'.
 * @returns {boolean} true or false.
 * @example
 * // 1% chance to piss off dream stans
 * if (chance(1)) console.log('hi guys dream here today we will be speedrunning minecraft');
 * else return;
 */
export function chance(number: number): boolean;
/**
 * Get a pseudo-random RGB color.
 * @returns {rgbArray} RGB color as an array of numbers.
 * @example console.log(randomRgb()) // [ 217, 164, 62 ]
 */
export function randomRgb(): rgbArray;
/**
 * Convert HEX string to RGB array.
 * @param {hexString} hex HEX string to convert to RGB color. Supports shorthands. (e.g. `03F` => `0033FF`)
 * @returns {rgbArray | null} RGB array, null if nothing was found.
 * @example
 * console.log(hexToRgb('#7F437F')) // [ 127, 67, 127 ]
 * console.log(hexToRgb('#3F2')) // [ 51, 255, 34 ] ('3F2' => '33FF22')
 * console.log(hexToRgb('im not impostor!!')) // null
 */
export function hexToRgb(hex: hexString): rgbArray | null;
/**
 * Convert RGB array to HEX string.
 * @param {rgbArray} rgb RGB values array. (e.g. `[15, 87, 69]`)
 * @returns {hexString} HEX color string. (e.g. `#ffffff`)
 * @example
 * console.log(rgbToHex(15, 87, 69)) // '#0F5745'
 * console.log(rgbToHex(hexToRgb('#0F5745'))) // '#0F5745'
 */
export function rgbToHex(rgb: rgbArray): hexString;
/**
 * Get a pseudo-random HEX string.
 * @returns {hexString} Pseudo-random HEX color string.
 */
export function randomHex(): hexString;
/**
 * A function to format bytes. Supports all the way to Yottabytes.
 * @param {number} bytes Number of bytes to format.
 * @param {number} decimals (Default = 2) Amount of decimals to include.
 * @returns {string} Formatted bytes
 * @example
 * console.log(formatBytes(645952)) // '630.81 KB'
 * console.log(formatBytes(584972157)) // '557.87 MB'
 * console.log(formatBytes(84537652657555, 10)) // '76.8865471924 TB'
 */
export function formatBytes(bytes: number, decimals?: number): string;
export class DateExtended extends Date {
    /**
     * Function to format date by using a custom format defined in a string.
     * 
     * List of tokens: https://gist.github.com/NoNameLmao/e4bcb1411b6b0307f3685e1b9572e528
     * @param {string} formatString Format string to use for custom formatting.
     * @returns {string} Formatted date according to the format string.
     */
    customFormat(formatString: string): string;
}
export type rgbArray = [number, number, number];
export type hexString = `#${string}`;

export const lowercase: "abcdefghijklmnopqrstuvwxyz";
export const uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const numbers: "0123456789";
export namespace characters {
    const string: {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        number: '0123456789',
        letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        all: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    }
    const array: {
        lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        letters: [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        all: [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        ]
    }
}
export namespace minecraft {
    /**
     * Get pseudo-random minecraft coordinates (world border at 30m + build height limits)
     * @param {boolean} preCavesAndCliffs Specify if the coordinates should be pre-1.18 or not
     * @param {'array' | 'object' | 'string'} format The format to return the coordinates in
     * @returns {number[] | {x: number, y: number, z: number} | string} Pseudo-random minecraft coordinates
     */
    export function getRandomCoordinates(preCavesAndCliffs: boolean, format: 'array' | 'object' | 'string'): number[] | {x: number, y: number, z: number} | string
}
