const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

let [c,d] = [0,0]

if(a<b){
    c=1
}else{
    c=0
}

if(a===b){
    d=1
}else{
    d=0
}

console.log(c,d)