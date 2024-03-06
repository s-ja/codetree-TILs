const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0].split(" ")
const b = input[1].split(" ")

const arr = [...a, ...b]

let str = ""

for(let i = 0; i < arr.length; i++){
    str += arr[i]
}

console.log(str)