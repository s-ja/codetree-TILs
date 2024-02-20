const fs = require("fs");

let input = fs.readFileSync(0).toString();

input = Number(input)

console.log((input+1.5).toFixed(2))