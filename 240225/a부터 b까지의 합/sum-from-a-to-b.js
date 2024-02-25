const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = Number(input[0])
const b= Number(input[1])
let result = 0
for(let i = a; i <= b; i++){
    result += i
}

console.log(result)