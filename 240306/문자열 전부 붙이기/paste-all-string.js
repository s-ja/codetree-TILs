const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift())

let str = ""

for(a of input){
    str += a
}

console.log(str)