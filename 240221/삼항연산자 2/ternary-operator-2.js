const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
input = Number(input)
console.log(input===1 ? "t" : "f")