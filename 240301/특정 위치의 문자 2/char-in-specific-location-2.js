const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let str = ""
for(let i = 0; i < input.length; i++){
    if(i === 2 || i === 5 || i === 8){
        str += input[i-1] + " "
    }
}

console.log(str)