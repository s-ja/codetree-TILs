const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const str = input[0]
const char = input[1]
let cnt = 0

for(let i = 0; i < str.length; i++){
    if(str[i] === char){
        cnt++
    }
}

console.log(cnt)