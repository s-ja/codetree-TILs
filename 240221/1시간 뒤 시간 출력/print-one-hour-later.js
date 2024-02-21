const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(":");

const h = Number(input[0])
const m = Number(input[1])

console.log(h+1+":"+m)