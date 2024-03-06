const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let str = ""
let result = ""

for(let i = 1; i < input.length; i += 2){
    str += input[i]
}

for(let i = str.length - 1; i >= 0; i--){
    result += str[i]
}

console.log(result)