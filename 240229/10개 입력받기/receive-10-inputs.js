const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let acc = 0
let cnt = 0
for(a of input){
    if(Number(a) === 0){
        break
    }else{
        acc += Number(a)
        cnt++
    }
}

console.log(acc, (acc/cnt).toFixed(1))