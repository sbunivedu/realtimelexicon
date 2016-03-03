'use strict';

var Server = require('./server.js').Server;

var PORT = 8080;
var server = Server(PORT);

server.listen(function() {
	console.log('Server started and listening on port', server.options.port)
});
