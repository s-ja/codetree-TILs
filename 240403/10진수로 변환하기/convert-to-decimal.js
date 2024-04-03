const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("").map(Number);

let n = 0

for(let i = 0; i < input.length; i++){
    n = n * 2 + input[i]
}

console.log(n)