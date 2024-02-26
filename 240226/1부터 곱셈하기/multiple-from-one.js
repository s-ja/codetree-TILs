const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const n = Number(input)

let mul = 1
let result = 0

for(let i = 1; i <= 10; i++){
    mul *= i
    result = i
    if(mul >= n){
        break
    }
}

console.log(result)