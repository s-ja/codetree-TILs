const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");

let result = 0

for(a of input){
    result += Number(a)
}

console.log(result)