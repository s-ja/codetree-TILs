const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let charCode = input.charCodeAt(0)

if(charCode === 97){
    charCode = 123
}

console.log(String.fromCharCode(charCode - 1))