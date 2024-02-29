const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let acc = 0

for(a of input){
    acc += Number(a)
}

console.log((acc/input.length).toFixed(1))