const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])
let result = 0;

for(let i = a; i <= b; i++){
    if(i % 6 === 0 && i % 8 !== 0){
        result += i
    }
}

console.log(result)