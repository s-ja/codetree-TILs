const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("-");

const month = input[0]

const day = input[1]

const year = input[2]

console.log(year+"."+month+"."+day)