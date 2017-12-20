let date = new Date();
let dateString;

console.log('time: ' + date.toString());

dateString = '' + date.getFullYear() + (date.getMonth() + 1) + date.getDate();

console.log('dataString: ' + dateString);