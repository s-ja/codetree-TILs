const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

const [s,t] = [input[0],input[1]]

console.log(t)
console.log(s)