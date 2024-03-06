const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const char = input.pop()

let cnt = 0;

for(let i = 0; i < input.length; i++){
    if(input[i][input[i].length - 1] === char){
        console.log(input[i])
        cnt++
    }
}

if(cnt === 0){
    console.log("None")
}