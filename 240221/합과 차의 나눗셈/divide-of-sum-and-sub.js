const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

const plus = a + b
const minus = a - b

const result = Math.round((plus/minus)*100)/100

console.log(result.toFixed(2))