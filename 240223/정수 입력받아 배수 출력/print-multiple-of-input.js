const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let result = ""

for(let i=1; i<=5; i++){
    result += ((input*i)+" ")
}

console.log(result)