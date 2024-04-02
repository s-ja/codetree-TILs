const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [a, b, c, d] = input

console.log(((60 * c) + d) - ((60 * a) + b))