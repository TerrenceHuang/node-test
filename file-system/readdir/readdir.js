const fs = require('fs');

const dirPath = 'temp-file';

if (fs.existsSync(dirPath)) {
  console.log('"' + dirPath + '" ' + 'exist!');

  let fileNames = fs.readdirSync(dirPath);
  
  for (let i = 0; i < fileNames.length; i++) {

    console.log(fileNames[i]);
  }
}