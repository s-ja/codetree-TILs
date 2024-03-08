const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");

let str = ""
let result = ""

for(a of input){
    str += a.toUpperCase()
}

for(a of str.split("")){
    if(a >= "A" && a <= "Z"){
        result += a
    }
}

console.log(result)