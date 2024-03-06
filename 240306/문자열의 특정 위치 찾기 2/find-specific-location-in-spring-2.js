const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const arr = ["apple", "banana", "grape", "blueberry", "orange"]

let cnt = 0

for(a of arr){
    if(a[2] === input || a[3] === input){
        console.log(a)
        cnt++
    }
}

console.log(cnt)