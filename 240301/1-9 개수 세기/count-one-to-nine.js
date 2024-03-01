const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

// console.log(n, arr)

let result = Array(9).fill(0)

// console.log(result)

for(a of arr){
    result[a-1]++
}

for(a of result){
    console.log(a)
}