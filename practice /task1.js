const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const arr = JSON.parse(input);
let sum = 0;
for(let i = 0; i < arr; i++) {
    sum += Math.pow(arr[i], 2);
}
console.log(sum);