const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = input.shift()

let length = 0
let cnt = 0

for(let i = 0; i < n; i++){
    length += input[i].length
    if(input[i][0] === "a"){
        cnt++
    }
}

console.log(length, cnt)