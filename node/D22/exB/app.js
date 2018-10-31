/*
synchronous -read***
var fs = require('fs');

var text = fs.readFileSync(__dirname + '/text.txt','utf8');

console.log(text);
*/


/*
asynchronous -read****
var fs = require('fs');

var text = fs.readFile(__dirname + '/text.txt', 'utf8', function(err, data) {
    console.log(data)
});
*/


/* 
write
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');

readable.on('data', function(chunk){
    writeable.write(chunk);
});
*/

//pipe
var fs = require('fs');

function copy (path) {


var readable = fs.createReadStream(__dirname + path, { encoding: 'utf8', highWaterMark: 32*1024 });

var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');

readable.pipe(writeable);

}

copy('/text.txt');
