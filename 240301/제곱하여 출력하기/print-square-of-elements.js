const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0])

let arr = input[1].split(" ")

let str = ""

for(a of arr){
    str += Number(a)*Number(a) + " "
}

console.log(str)