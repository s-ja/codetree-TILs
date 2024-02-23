const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

input = Number(input)
let result = ""
while(input>=1){
    result += (input + " ")
    input--
}

console.log(result)