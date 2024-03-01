const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number)

const arr = input[1].split(" ").map(Number)

let cnt = 0

for(a of arr){
    if(a === m){
        cnt++
    }
}

console.log(cnt)