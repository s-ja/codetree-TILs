const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = input[0].split("")
const b = input[1].split("")

b[0] = a[0]
b[1] = a[1]

console.log(b.join(""))