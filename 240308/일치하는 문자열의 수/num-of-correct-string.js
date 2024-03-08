const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, str] = input.shift().split(" ")

let cnt = 0

for(elem of input){
    if(elem === str){
        cnt++
    }
}

console.log(cnt)