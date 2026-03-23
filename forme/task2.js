const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const sentence = input[0];
const joinChar = input[1];

const result = sentence.split(' ').join(joinChar);
console.log(result);