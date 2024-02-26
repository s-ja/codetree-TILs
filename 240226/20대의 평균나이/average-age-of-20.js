const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let result = 0
let count = 0

for(let i = 0; i < input.length; i++){
    if(Number(input[i]) > 29 || Number(input[i]) < 20){
        break
    }
    result += Number(input[i])
    count++
}

console.log((result/count).toFixed(2))