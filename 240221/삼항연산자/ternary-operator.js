const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

console.log(input>=100 ? "pass" : 'failure')