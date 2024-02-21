const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])

console.log(a+b+c)
console.log(Math.floor((a+b+c)/3))