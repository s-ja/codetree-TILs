const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// for(let i = 0; i < input.length; i++){

// }

let result = []

for(a of input){
    if(Number(a) === 0){
        break
    }
    result.push(Number(a))
}

console.log(result[result.length-1] + result[result.length-2] + result[result.length-3])