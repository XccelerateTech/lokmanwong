var http = require('http');
var fs = require('fs');

// http.createServer(function(req, res){
//     if(req.url === '/') {
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if(req.url === '/style.css') {
//         fs.createReadStream(__dirname + '/style.css').pipe(res);
//     } else if(req.url === '/assets/logo.png') {
//         fs.createReadStream(__dirname + '/assets/logo.png').pipe(res);
//     } else {
//         res.writeHead(404);
//         res.end();
//     }

// }).listen(8080, '127.0.0.1');

// var http = require('http');
// var fs = require('fs');



var path = require('path');


http.createServer(function(req,res){
    let filePath = req.url == '/' ? "index.html" : req.url;

    res.writeHead(200);

    fs.createReadStream(path.join(__dirname, filePath)).pipe(res);

}).listen(8080, '127.0.0.1')
