const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ")
let result = []
let str = ""

for(a of arr){
    if(Number(a) % 2 === 0){
        result.push(Number(a))
    }
}

// console.log(result)

for(a of result){
    str += a + " "
}

console.log(str)