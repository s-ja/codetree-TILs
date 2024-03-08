const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");

let str = ""

for(a of input){
    if(a >= "A" && a <= "Z"){
        str += a.toLowerCase()
    }else{
        str += a.toUpperCase()
    }
}

console.log(str)