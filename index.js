//  create server
var http = require('http')

http.createServer(function(req , res){
    res.writeHead(200 );
    res.end('hello js')
}).listen(3030)
 
// console.log('welcome to my chanel'); // run this code to node index.js   // uper nu comment mari devanu

