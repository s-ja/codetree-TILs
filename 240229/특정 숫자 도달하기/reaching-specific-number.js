const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let tmp = 0
let cnt = 0

for(a of input){
    if(Number(a) >= 250){
        break
    }else{
        tmp += Number(a)
        cnt++
    }
}

console.log(tmp, tmp/cnt.toFixed(1))