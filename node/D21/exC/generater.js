var randomAlphabet = require('./randomAlphabet');
var randomNo = require('./randomNo');
var arr = [''];
function generater(x) {
    for (i=0; i<x; i++) {
        arr = arr + randomAlphabet(randomNo());
    }
}
generater(5);
console.log(arr);


