const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
const arr = input[1].trim().split(" ").map(Number)

arr.sort((a, b) => a - b);

const result = []

for(let i = 0; i < N * 2; i++){
    result.push(arr[i] + arr[N * 2 - i - 1])
}

console.log(Math.max(...result))
// console.log(result)