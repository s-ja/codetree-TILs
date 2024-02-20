const fs = require("fs");

let input = fs.readFileSync(0).toString();

input = Number(input)

console.log(Math.round((input*30.48)*10)/10)