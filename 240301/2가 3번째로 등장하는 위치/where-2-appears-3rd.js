const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])

const arr = input[1].split(" ").map(Number)

let cnt = 0
let result = 0

for(a of arr){
    if(cnt === 3){
        break
    }
    result++
    
    if(a === 2){
        cnt++
    }
}

console.log(result)