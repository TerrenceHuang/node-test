"use strict";

const data = require('./data');

logMyObject();

let objReference = data.myObject;

// This line will change objReference & data.myObject
objReference.name = 'bread';

logMyObject();

function logMyObject() {

  console.log('myObject: ' + JSON.stringify(data.myObject));
}