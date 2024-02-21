const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("-");

const [a,b,c] = input

console.log(`${a}-${c}-${b}`)