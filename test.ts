console.log('===== Beginning testing =====');
import { getRandomArbitrary, getRandomInt, jsonRead, jsonWrite, limit, sleep, characters } from './index'
console.log(getRandomArbitrary(-1337, 1337));
console.log(getRandomInt(420));
(async() => {
    let test = await jsonRead('./test.json');
    console.log(test);
    console.log(test['why-are-you-here'].answers[2]);
    test['why-are-you-here'].answers[2] = 'j';
    await jsonWrite('./test.json', test);
    console.log(limit('subscribe to technoblade', 20));
    console.log(characters.all);
    await sleep(1000);
    console.log('this should appear a second after');
    console.log('and if it does, then test successful!');
    console.log('===== Finished testing =====');
})();