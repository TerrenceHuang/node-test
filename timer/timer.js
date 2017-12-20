var now = new Date();
var nextCallTime = new Date();

nextCallTime.setSeconds(0);
nextCallTime.setMilliseconds(0);

// var nextCleanLast = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 10, 0, 0) - now;

setNext();

function setNext() {

  now = new Date();
  nextCallTime.setMinutes(nextCallTime.getMinutes() + 1);
  setTimeout(() => {
    console.log('fire!');
    setNext();
  }, nextCallTime - now);
}