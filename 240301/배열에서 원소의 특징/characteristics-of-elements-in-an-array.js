const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let str = ""

for(a of input){
    if(Number(a) % 3 === 0){
        break
    }
    str = a
}

console.log(str)