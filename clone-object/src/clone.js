"use strict";

const data = require('./data');

logMyObject();

let newObj = JSON.parse(JSON.stringify(data.myObject));

// This line will only change newObj
newObj.name = 'bread';

logMyObject();
logNewObject();

function logMyObject() {

  console.log('myObject: ' + JSON.stringify(data.myObject));
}

function logNewObject() {

  console.log('newObj: ' + JSON.stringify(newObj));
}