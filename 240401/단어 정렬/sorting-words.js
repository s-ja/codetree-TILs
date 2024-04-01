const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

input.sort()

for(elem of input){
    console.log(elem)
}