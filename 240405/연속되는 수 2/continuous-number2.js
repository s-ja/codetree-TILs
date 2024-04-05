const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const n = input.shift()

// console.log(input)
let cnt = 1;

for(let i = 0; i < n - 1; i++){
    if(input[i] === input[i + 1]){
        cnt++
    }
}

console.log(cnt)