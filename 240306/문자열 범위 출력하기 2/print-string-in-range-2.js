const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const num = Number(input[1])

let str = ""

for(let i = input[0].length - 1; i >= input[0].length - num; i--){
    if(input[0][i]){
        str += input[0][i]
    }
}

console.log(str)