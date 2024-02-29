const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let result = []

for(a of input){
    if(Number(a) === 0){
        break
    }else{
        result.push(a)
    }
}
// console.log(result)

let str = ""
for(let i = result.length - 1; i >= 0; i--){
    str += result[i] + " "
}

console.log(str)