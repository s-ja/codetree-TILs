const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const a = Number(input[0])
const b = Number(input[1])

if(a>=1.0 && b>=1.0){
    console.log('High')
}else if(a>=0.5 && b>=0.5){
    console.log('Middle')
}else{
    console.log('Low')
}