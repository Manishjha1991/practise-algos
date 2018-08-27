var http = require('http');

//require('./asyncAwaitAndPromise.js');
// require('./Array/arrayDuplicate.js');
// require('./Array/findUnique.js');
require('./Array/missingNumberInArray')






//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);