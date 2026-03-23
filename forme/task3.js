const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const obj = JSON.parse(input);
const keys = Object.keys(obj);

console.log(keys.length());
console.log(keys.sort().join(','));