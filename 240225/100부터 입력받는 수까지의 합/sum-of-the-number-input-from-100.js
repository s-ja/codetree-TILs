const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const a = Number(input)
let result = 0

for(let i = a; i <= 100; i++){
    result += i;
}

console.log(result)