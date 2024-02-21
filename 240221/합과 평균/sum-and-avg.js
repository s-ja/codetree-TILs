const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

console.log(`${a+b} ${((a+b)/2).toFixed(1)}`)