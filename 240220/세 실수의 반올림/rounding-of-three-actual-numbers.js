const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0]
const b = input[1]
const c = input[2]

console.log((Math.round(a*1000)/1000).toFixed(3))
console.log((Math.round(b*1000)/1000).toFixed(3))
console.log((Math.round(c*1000)/1000).toFixed(3))