const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(Number(input[2]) + Number(input[4])+ Number(input[9]))