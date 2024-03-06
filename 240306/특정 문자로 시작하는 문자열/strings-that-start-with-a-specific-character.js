const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const num = Number(input.shift())
const char = input.pop()

let cnt = 0
let length = 0

for(let i = 0; i < input.length; i++){
    if(input[i][0] === char){
        cnt++
        length += input[i].length
    }
}

console.log(cnt, (length / cnt).toFixed(2))