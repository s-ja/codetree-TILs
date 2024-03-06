const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const str = input.slice(0,1) + input.slice(2, input.length - 2) + input.slice(input.length - 1)

console.log(str)