const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const n = Number(input)
let result = 0
let sum = 0

for(let i = 1; i <= 100; i++){
    sum += i
    result = i
    if(sum >= n){
        break
    }
}
console.log(result)