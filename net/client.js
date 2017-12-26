var net = require('net');

var client = new net.Socket();
client.connect(8124, '127.0.0.1', function() {
    console.log('Connected');
    while(1)
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    client.destroy();
});

client.on('close', function() {
	console.log('Connection closed');
});

client.on('error', (e) => {
    console.log(e);
});