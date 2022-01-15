# emberutils
an npm package for small things that im lazy to add in every project i have
# API
## jsonRead(filePath: string): Promise\<any\>
Read a .json file and return it's parsed data.
### filePath - path to the .json file, can be relative or absolute.
## jsonWrite(filePath: string, data: string[] | object[] | object): Promise\<void\>
Write data to a .json file.
### filePath - path to the .json file, can be relative or absolute.
### data - data to write to the .json file.
## sleep(ms: string): Promise\<void\>
Promisified version of "setTimeout()" for waiting a certain amount of milliseconds before executing the next line of code.
### ms - a number of milliseconds to wait.
## limit(string: string, limit: number): string
Limit a string's length to a certain number of characters.
### string - string to limit.
### limit - Number to limit the string's length to.
If string length is less than specified in "limit", returns the string itself. Otherwise returns string with the limited length.
```js
const string = 'Subscribe to technoblade'; // 24 characters long
console.log(limit(string, 20)); // 'Subscribe to techno…' ("…" is 1 character)
```
## getRandomArbitrary(min: number, max: number): number
Get a pseudo-random number between "min" and "max" numbers. Includes both "min" and "max" numbers. Supports negative numbers.
### min - Minimal value.
### max - Maximal value.
Returns a number between "min" and "max" values.
```js
console.log(getRandomArbitrary(69, 420)); // 243
console.log(getRandomArbitrary(-1337, 1337)); // -462
```
## getRandomInt(num: number): number
Get a pseudo-random number in a range from 0 to "num". Supports negative values.
### num - A number. Cannot be equal to -1, 0 or 1
If "num" > 0, returns a random number between 0 and "num". Otherwise returns a random negative number between "num" and 0.
```js
console.log(getRandomInt(-300)) // -229
console.log(getRandomInt(1337)) // 592
```
## (object) characters
An object that consists of english letters and numbers.
### lowercase: string,
### uppercase: string,
### numbers: string,
### letters: string, (lowercase + uppercase)
### all: string (letters + numbers)
