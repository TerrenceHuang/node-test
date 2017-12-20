const fs = require('fs');

let sourcePath = 'hi.txt';
let destinationPath = 'folder/hi.txt';

fs.createReadStream(sourcePath)
  .pipe(fs.createWriteStream(destinationPath));