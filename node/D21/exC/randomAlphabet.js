var randomNo = require('./randomNo');

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomAlphabet = function (randomNo) {
    return alphabet[randomNo];
}

console.log(randomAlphabet(randomNo()));

module.exports = randomAlphabet;