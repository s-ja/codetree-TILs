const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const n = input.shift()

// console.log(input)
let maxCnt = 0;
let currCnt = 1;

for(let i = 1; i < n; i++){
    if(input[i] === input[i - 1]){
        currCnt++;
    }else{
        maxCnt = Math.max(maxCnt, currCnt);
        currCnt = 1;
    }
}

maxCnt = Math.max(maxCnt, currCnt);

console.log(maxCnt)