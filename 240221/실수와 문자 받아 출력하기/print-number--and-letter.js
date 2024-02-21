const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

// console.log(input)

const c = input[0]
const a = input[1]
const b = input[2]

console.log(c)
console.log((Math.round(a*100)/100).toFixed(2))
console.log((Math.round(b*100)/100).toFixed(2))