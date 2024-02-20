const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

const [a,b] = input[0].split(" ")
const c = input[1]

console.log(a,b,c)