let now = new Date();

printTime();
now.setMinutes(now.getMinutes() - 60);
printTime();



function printTime() {

  console.log('' + now.getFullYear() + '/' +
    now.getMonth() + '/' +
    now.getDate() + ' ' +
    now.getHours() + ':' +
    now.getMinutes() + ':' +
    now.getSeconds() + ':' +
    now.getMilliseconds());  
}