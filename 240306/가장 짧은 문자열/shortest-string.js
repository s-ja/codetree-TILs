const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let short = input[0]
let long = input[0]

for(a of input){
    if(a.length > long.length){
        long = a
    }
    if(a.length < short.length){
        short = a
    }
}

console.log(long.length - short.length)