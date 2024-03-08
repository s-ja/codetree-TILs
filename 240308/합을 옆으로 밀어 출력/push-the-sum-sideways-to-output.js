const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift())

let tmp = 0

for(elem of input){
    tmp += Number(elem)
}

console.log(tmp.toString().slice(1)+tmp.toString().slice(0,1))