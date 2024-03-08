const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");

let str = ""
let result = ""

for(a of input){
    str += a.toLowerCase()
}

for(a of str.split("")){
    if((a >= "a" && a <= "z") || (a >= "0" && a <= "9")){
        result += a
    }
}

console.log(result)