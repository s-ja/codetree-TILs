const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(input >= 3000 ? "book" : input >= 1000 ? "mask" : input >= 100 ? 'pen' : 'no')