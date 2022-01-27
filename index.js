const fs = require('fs').promises; // for compatibility with node v10.1.0 and above

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
 * @example
 * console.log('Hi!');
 * await sleep(5000);
 * console.log('Wait, are you leaving already?'); // runs after 5 seconds
 * 
 * // or...
 * sleep(10000).then(() => console.log('I have like 10s ping, what\'s wrong?'));
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Limit a string's length to a certain number of characters.
 * @param {string} string String to limit.
 * @param {number} limit Number to limit the string's length to.
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
 * @param {number} num A number. `(-1 will always return -1 and 0 or 1 will always return 0)`
 * @returns {number} If "num" > 0, returns a random number between 0 and "num". Otherwise returns a random negative number between "num" and 0.
 * @example
 * console.log(getRandomInt(-300)) // -229
 * console.log(getRandomInt(1337)) // 592
 */
function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

/**
 * Shuffle an array in pseudo-random order.
 * @param {any[]} array Array to shuffle.
 * @returns {any[]} Shuffled array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)),
            temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/**
 * Pseudo-random chance function.
 * @param {number} number Chance in percentage to return 'true'.
 * @returns {boolean} true or false.
 * @example
 * // 1% chance to piss off dream stans
 * if (chance(1)) console.log('hi guys dream here today we will be speedrunning minecraft');
 * else return;
 */
function chance(number) {
    return Math.random() * 100 < number;
}

/**
 * Get a pseudo-random RGB color.
 * @returns {import('.').rgbArray} RGB color as an array of numbers.
 * @example console.log(randomRgb()) // [ 217, 164, 62 ]
 */
function randomRgb() {
    // 256 because need to include 255
    return [getRandomInt(256), getRandomInt(256), getRandomInt(256)];
}
/**
 * Convert HEX string to RGB array.
 * @param {hexString} hex HEX string to convert to RGB color. Supports shorthands. (e.g. `03F` => `0033FF`)
 * @returns {rgbArray | null} RGB array, null if nothing was found.
 * @example
 * console.log(hexToRgb('#7F437F')) // [ 127, 67, 127 ]
 * console.log(hexToRgb('#3F2')) // [ 51, 255, 34 ] ('3F2' => '33FF22')
 * console.log(hexToRgb('im not impostor!!')) // null
 */
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}
/**
 * Convert RGB array to HEX string.
 * @param {import('.').rgbArray} rgb RGB values array. (e.g. `[15, 87, 69]`)
 * @returns {import('.').hexString} HEX color string. (e.g. `#ffffff`)
 * @example
 * console.log(rgbToHex(15, 87, 69)) // '#0F5745'
 * console.log(rgbToHex(hexToRgb('#0F5745'))) // '#0F5745'
 */
function rgbToHex(rgb) {
    return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1).toUpperCase();
}

/**
 * Get a pseudo-random HEX string.
 * @returns {hexString} Pseudo-random HEX color string.
 */
function randomHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
}

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
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024,
        dm = decimals < 0 ? 0 : decimals,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

class DateExtended extends Date {
    /**
     * Function to format date by using a custom format defined in a string.
     * 
     * List of tokens: https://gist.github.com/NoNameLmao/e4bcb1411b6b0307f3685e1b9572e528
     * @param {string} formatString Format string to use for custom formatting.
     * @returns {string} Formatted date according to the format string.
     */
    customFormat(formatString) {
        const YYYY = this.getFullYear(),
            YY = (`${YYYY}`).slice(-2),
            M = this.getMonth() + 1,
            MM = M < 10 ? (`0${M}`) : M,
            MMMM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][M - 1],
            MMM = MMMM.substring(0, 3),
            D = this.getDate(),
            DD = D < 10 ? (`0${D}`) : D,
            DDDD = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][this.getDay()],
            DDD = DDDD.substring(0, 3),
            dMod = D % 10,
            th = (D >= 10 && D <= 20) ? 'th' : (dMod == 1) ? 'st' : (dMod == 2) ? 'nd' : (dMod == 3) ? 'rd' : 'th';
        formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);
        const hhh = this.getHours();
        let h = hhh;
        const hh = h < 10 ? (`0${h}`) : h,
            hhhh = hhh < 10 ? ('0' + hhh) : hhh,
            ampm = hhh < 12 ? 'am' : 'pm',
            AMPM = ampm.toUpperCase(),
            m = this.getMinutes(),
            mm = m < 10 ? ('0' + m) : m,
            s = this.getSeconds(),
            ss = s < 10 ? ('0' + s) : s;
        if (h == 0) h = 24;
        if (h > 12) h -= 12;
        return formatString
            .replace("#YYYY#", YYYY).replace("#YY#", YY)
            .replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M)
            .replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D)
            .replace("#th#", th).replace("#hhhh#", hhhh).replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h)
            .replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s)
            .replace("#ampm#", ampm).replace("#AMPM#", AMPM);
    }
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
    jsonRead,
    jsonWrite,
    sleep,
    limit,
    getRandomArbitrary,
    getRandomInt,
    shuffleArray,
    randomRgb,
    chance,
    hexToRgb,
    rgbToHex,
    randomHex,
    formatBytes,
    DateExtended,
    characters
};