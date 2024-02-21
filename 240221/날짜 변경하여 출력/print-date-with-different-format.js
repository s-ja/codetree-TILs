const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(".");

const [year, month, day] = input

console.log(`${month}-${day}-${year}`)