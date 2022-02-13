import 'colors'
import { getRandomArbitrary, getRandomInt, jsonRead, jsonWrite, limit, sleep, characters, shuffleArray, randomRgb, chance, hexToRgb, randomHex, rgbToHex, formatBytes, DateExtended, minecraft } from './index'
(async () => {
    console.log(getRandomArbitrary(-1337, 1337))
    console.log(getRandomInt(420))
    let test = await jsonRead('./test.json')
    console.log(test)
    console.log(test['why-are-you-here'].answers[2])
    test['why-are-you-here'].answers[2] = 'j'
    await jsonWrite('./test.json', test)
    console.log(limit('subscribe to technoblade', 20))
    console.log(characters.string.all)
    console.log(shuffleArray(characters.array.all))
    console.log(chance(50))
    console.log(formatBytes(getRandomInt(10000000000), 3))
    const random = {
        rgb: randomRgb(),
        hex: randomHex()
    }
    console.log(random)
    console.log(rgbToHex(random.rgb))
    console.log(hexToRgb(random.hex))
    console.log(new DateExtended().customFormat('#YYYY# #MMMM# #DDDD# #D##th# #hhhh#:#mm#:#ss#'))
    console.log(minecraft.getRandomCoordinates(true, 'object'))
    await sleep(1000)
    console.log(
        'This should appear a second later\n' +
        'and if it does, then TypeScript test is successful!'
    )
    console.log('=============== Finished TypeScript testing ==============='.cyan)
})()
