const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split(' ');
let a = NUmber(input[0]);
let b = NUmber(input[1]);
if(a > b) {
  console.log(a);
}
else {
  console.log(b);
}
console.log(Math.max(a,b));