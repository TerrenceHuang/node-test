const delay = require('../timer/delay');

// when callback thread be block, no other callbacks can be called.
console.log('1');

setTimeout(() => {
    console.log('4');
}, 3);

setImmediate(() => {

    console.log('2');
    setImmediate(() => {
        console.log('5');
    });
    delay.delay(5);
    console.log('3');
});