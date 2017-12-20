var fs = require('fs');

// Append content at the end of the file:
fs.appendFile('mynewfile1.txt', 'This is my text.', function(err) {

  if (err) throw err;
  console.log('Updated!');
});