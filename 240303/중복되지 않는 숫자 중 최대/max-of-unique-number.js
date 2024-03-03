const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

let result = arr.shift()

for(a of arr){
    if(a === result){
    result = -1
    }else if(a > result){
        result = a
    }
}

console.log(result)