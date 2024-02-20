const fs = require("fs");

let input = fs.readFileSync(0).toString().split(" ");

let [a,b] = [input[1], input[0]]

console.log(a,b)