var fs = require('fs');

// Replace the file with a new one:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
