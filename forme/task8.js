const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const s = String(input);

const rev = input.split('').reverse().join('');
if(s == rev){
  console.log("True");
}
else {
  console.log("false");
}