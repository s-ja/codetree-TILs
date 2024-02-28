const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

for(let i = 0; i < a; i++){
    let str = ""
    for(let j = 0; j < b; j++){
        str += (i+1)*(j+1) + " "
    }
    console.log(str)
}