const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = [...input]

console.log(arr.sort().join(""))