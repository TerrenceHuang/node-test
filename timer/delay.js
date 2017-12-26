
// console.log(new Date());

// delay(5);

// console.log(new Date());

function delay(second) {

    let now = new Date();
    let releaseTime = now.setSeconds(now.getSeconds() + second);

    do {
        now = new Date();
    }while (now < releaseTime);
}

exports.delay = delay;