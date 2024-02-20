const fs = require("fs");

let input = fs.readFileSync(0).toString();

input = Number(input)

const round = (Math.round((input*30.48)*10)/10)
console.log(round.toFixed(1))