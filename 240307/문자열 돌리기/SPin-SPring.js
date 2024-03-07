const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

console.log(input)
for(let i = 1; i < input.length; i++){
    console.log(input.slice(-i) + input.slice(0, input.length - i))
}
console.log(input)