const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const num = Number(input.shift())
let result = 0

for(let i = 0; i < num; i++){
    if(input[i] % 2 !== 0 && input[i] % 3 === 0){
        result += Number(input[i])
    }
}

console.log(result)