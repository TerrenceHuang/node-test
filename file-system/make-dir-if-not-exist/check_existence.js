const fs = require('fs');

const dirName = 'folder';

/*
// Check existence of a dir:
fs.access(dirName, fs.constants.F_OK, (err) => {
  
  console.log('"' + dirName + '" ' + (err ? 'not exist!' : 'exist!'));
  if (err) {

    fs.mkdir(dirName, (err) => {

      if (err) throw err;
      console.log('"' + dirName + '" ' + 'created!');
    });
  }
});
*/

if (fs.existsSync(dirName)) {
  console.log('"' + dirName + '" ' + 'exist!');
}else {
  fs.mkdirSync(dirName);
  
  console.log('"' + dirName + '" ' + 'created!');
}
