const fs = require('fs/promises');

/**
 * Read a .json file and return parsed data from it.
 * @param {string} filePath Path to the .json file, can be relative or absolute.
 * @returns {Promise<any>} Parsed JSON data
 */
function jsonRead(filePath) {
    return new Promise(async(resolve, reject) => {
        const data = await fs.readFile(filePath, { encoding: 'utf8' }).catch(reject);
        resolve(JSON.parse(data));
    });
}
/**
 * Write data to a .json file.
 * @param {string} filePath Path to the .json file, can be relative or absolute.
 * @param {string[] | object[] | object} data Data to write to the .json file.
 * @returns {Promise<void>} Promise. If "fs" meets an error then the promise is rejected
 */
async function jsonWrite(filePath, data) {
    return new Promise(async(resolve, reject) => {
        await fs.writeFile(filePath, JSON.stringify(data, null, 4), { encoding: 'utf8' }).catch(reject);
        resolve();
    });
}

/**
 * Promisified version of "setTimeout()" for waiting a certain amount of milliseconds before executing the next line of code.
 * @param {number} ms Number of milliseconds to wait. 
 * @returns {Promise<void>} void
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Limit a string's length to a certain number of characters.
 * @param {string} string String to limit.
 * @param {number} limit Length to limit the string to. 
 * @returns {string} If string length is less than specified in "limit", returns the string itself. Otherwise returns string with the limited length.
 * @example
 * const string = 'Subscribe to technoblade'; // 24 characters long
 * console.log(limit(string, 20)); // 'Subscribe to techno…' ("…" is 1 character)
 */
function limit(string, limit) {
    if (string.length > limit) return string.substring(0, limit - 1) + '…';
    else return string;
}

/**
 * Get a pseudo-random number between "min" and "max" numbers. Includes both "min" and "max" numbers. Supports negative numbers.
 * @param {number} min Minimal value.
 * @param {number} max Maximal value.
 * @returns {number} A number between "min" and "max" values.
 * @example
 * console.log(getRandomArbitrary(69, 420)); // 243
 * console.log(getRandomArbitrary(-1337, 1337)); // -462
 */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get a pseudo-random number from given value. Supports negative values.
 * @param {number} num A number. Cannot be equal to -1, 0 or 1
 * @returns {number} If "num" > 0, returns a random number between 0 and "num". Otherwise returns a random negative number between "num" and 0.
 * @example
 * console.log(getRandomInt(-300)) // -229
 * console.log(getRandomInt(1337)) // 592
 */
function getRandomInt(num) {
    if (num == -1) throw new Error('getRandomInt(): "num" cannot be equal to -1 as it will always return -1.');
    if (num == 0 || num == 1) throw new Error(`getRandomInt(): "num" cannot be equal to ${num} as it will always return 0.`);
    return Math.floor(Math.random() * num);
}

const lowercase = 'abcdefghijklmnopqrstuvwxyz',
    uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers = '0123456789';
const characters = {
    lowercase: lowercase,
    uppercase: uppercase,
    numbers: numbers,
    letters: `${lowercase}${uppercase}`,
    all: `${lowercase}${uppercase}${numbers}`
};

module.exports = {
    getRandomArbitrary,
    getRandomInt,
    jsonRead,
    jsonWrite,
    limit,
    sleep,
    characters
};