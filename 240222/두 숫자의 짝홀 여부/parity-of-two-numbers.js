const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

if(a%2===0){
    console.log('even')
}else{
    console.log('odd')
}

if(b%2===0){
    console.log('even')
}else{
    console.log('odd')
}