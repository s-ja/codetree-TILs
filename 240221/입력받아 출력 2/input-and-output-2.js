const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("-");

const [a,b] = input

const result = (a+b).trim()
console.log(result)