const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const number = Number(input.shift())

let sum = 0;

for(let i =0; i < number; i++){
    sum += Number(input[i])
}

console.log(sum, (sum/number).toFixed(1))