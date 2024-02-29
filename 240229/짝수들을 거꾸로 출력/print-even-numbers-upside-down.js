const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())
const arr = input[0].split(" ")
let result = []

for(a of arr){
    if(Number(a) % 2 === 0){
        result.push(Number(a))
    }
}
let str = ""
for(let i = result.length - 1; i >= 0; i--){
    str += result[i] + " "
}

console.log(str)