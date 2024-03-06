const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let arr = []
let cnt = 1
let str = ""

for(let i = 0; i < input.length; i++){
    if(input[i] === input[i + 1]){
        cnt++
    }else{
        arr.push(input[i])
        arr.push(cnt)
        cnt = 1
    }
}

for(a of arr){
    str += a
}

console.log(str.length)
console.log(str)