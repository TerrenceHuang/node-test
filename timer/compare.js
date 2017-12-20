let before = new Date();
let now = new Date();
let after = new Date();

before.setDate(before.getDate() - 1);
after.setDate(after.getDate() + 1);

printTime(before);
printTime(now);
printTime(after);

let beforeGreaterThanNow = before > now;
let beforeSmallerThanNow = before < now;

console.log('beforeGreaterThanNow: ' + beforeGreaterThanNow);
console.log('beforeSmallerThanNow: ' + beforeSmallerThanNow);

function printTime(time) {

  console.log('' + time.getFullYear() + '/'
    + time.getMonth() + '/'
    + time.getDate() + ' '
    + time.getHours() + ':'
    + time.getMinutes() + ':'
    + time.getSeconds() + ':'
    + time.getMilliseconds());
}