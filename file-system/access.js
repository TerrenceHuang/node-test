const fs = require('fs');

const existFileName = 'existfile.txt';
const notExistFileName = 'notexistfile.txt';

// Check the existence of a file:
fs.access(existFileName, fs.constants.F_OK, (err) => {
  console.log('"' + existFileName + '" ' + (err ? 'not exist!' : 'exist!'));
});

fs.access(notExistFileName, fs.constants.F_OK, (err) => {
  console.log('"' + notExistFileName + '" ' + (err ? 'not exist!' : 'exist!'));
});