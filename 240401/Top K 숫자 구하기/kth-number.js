const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number)
input = input[0].split(" ").map(Number)
input.sort((a,b)=>a-b)

console.log(input[K])