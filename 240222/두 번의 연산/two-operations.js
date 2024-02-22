const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = Number(input)
if(input%2!==0){
    input += 3
}
if(input%3===0){
    input = input/3
}

console.log(input)