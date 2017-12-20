var fs = require('fs');

// Create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function (err, file) {
  
  if (err) throw err;
  console.log('Saved!');
});