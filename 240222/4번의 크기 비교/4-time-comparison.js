const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const a = Number(input[0])
// console.log(input[1])
const b = input[1].split(" ")
for(let i = 0; i<b.length; i++){
    if(a>b[i]){
        console.log(1)
    }else{
        console.log(0)
    }
}