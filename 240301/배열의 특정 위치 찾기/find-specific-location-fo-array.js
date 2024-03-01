const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let sum = 0
let avg = 0
let cnt = 0

for(let i = 1; i < input.length; i += 2){
    sum += Number(input[i])
}

for(let i = 2; i < input.length; i += 3){
    avg += Number(input[i])
    cnt++
}

console.log(sum, (avg/cnt).toFixed(1))