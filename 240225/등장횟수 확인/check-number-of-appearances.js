const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let result = 0

for(let i = 0; i < input.length; i++){
    if(Number(input[i]) % 2 === 0){
        result++
    }
}

console.log(result)