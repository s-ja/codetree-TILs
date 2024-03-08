const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");

let result = 0

for(a of input){
    if(a >= "0" && a <= "9"){
        result += Number(a)
    }
}

console.log(result)