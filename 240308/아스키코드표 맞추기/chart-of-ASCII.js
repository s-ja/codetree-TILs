const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let str = ""

for(a of input){
    str += String.fromCharCode(a) + " "
}

console.log(str)