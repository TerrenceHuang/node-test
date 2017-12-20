const http = require('http');

http.get({
    hostname: 'localhost',
    port: 3000,
    path: '/',
    agent: false
  }, (res) => {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d) => {
    console.error(d.toString('utf8'));
    // process.stdout.write(d);
  });
}).on('error', (e) => {
  console.error(e);
});