const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const b = Number(input[0])
const a = Number(input[1])
let result = ""
for(let i = b; i >= a; i--){
    if(i%2!==0){
        result += (i + " ")
    }
}

console.log(result)