const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

console.log(String.fromCharCode(input.charCodeAt(0) + 1))