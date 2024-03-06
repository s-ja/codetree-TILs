const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const str = input[0]
const target = input[1]
let cnt = 0

for(let i = 0; i < str.length - 1; i++){
    if(str[i] === target[0] && str[i + 1] === target[1]){
        cnt++
    }
}

console.log(cnt)