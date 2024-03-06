const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const str = input.slice(0,2) + input.slice(3, input.length - 2) + input.slice(input.length - 1)

console.log(str)