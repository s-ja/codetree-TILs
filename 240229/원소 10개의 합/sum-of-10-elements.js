const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let result = 0

for(let a of input){
    result += Number(a)
}

console.log(result)