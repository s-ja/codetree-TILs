const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const a = input[0].split(" ")
const b = input[1].split(" ")

// console.log(a,b)

if(Number(a[0])>Number(b[0]) && Number(a[1])>Number(b[1])){
    console.log(1)
}else{
    console.log(0)
}