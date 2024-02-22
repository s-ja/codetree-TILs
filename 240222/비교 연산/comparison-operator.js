const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

if(a>=b){
    console.log(1)
}else{
    console.log(0)
}
if(a>b){
    console.log(1)
}else{
    console.log(0)
}
if(a<=b){
    console.log(1)
}else{
    console.log(0)
}
if(a<b){
    console.log(1)
}else{
    console.log(0)
}
if(a===b){
    console.log(1)
}else{
    console.log(0)
}
if(a!==b){
    console.log(1)
}else{
    console.log(0)
}