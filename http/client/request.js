const http = require('http');

var options = { 
  hostname: 'localhost',
  port: 3000,
  path: '/header',
  method: 'GET',
  headers: {
    'Cookie': 'myCookie=myvalue',
    'B': 'haha'
  }
};
var results = ''; 
var req = http.request(options, function(res) {
  res.on('data', function (chunk) {
      results = results + chunk;
      console.log(results);
  }); 
  res.on('end', function () {
      //TODO
  }); 
});

req.on('error', function(e) {
      console.log(e);
});

req.end();