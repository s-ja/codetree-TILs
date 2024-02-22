const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = Number(input)

if(input%2 === 0){
    input = input/2
}

if(input%2 !== 0){
    input = Math.floor((input+1)/2)
}

console.log(input)