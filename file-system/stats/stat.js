const fs = require('fs');

const fileName = '201711201544';

let stats = fs.statSync(fileName);


let dateObject = stats.mtime;
let year = dateObject.getFullYear();
let month = dateObject.getMonth() + 1;
let date = dateObject.getDate();
let dateString;

month = month < 10 ? '0' + month : month;
date = date < 10 ? '0' + date : date;
dateString = '' + year + month + date + '-';

console.log(fileName);