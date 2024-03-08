const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

// console.log(String.fromCharCode(input.charCodeAt(0) + 1))

let charCode = input.charCodeAt(0)

// console.log(charCode)
// console.log("a".charCodeAt(0))

if(charCode = 122){
    charCode = 96
}

console.log(String.fromCharCode(charCode + 1))