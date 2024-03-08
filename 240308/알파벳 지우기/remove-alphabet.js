const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const A = input[0].split("")
const B = input[1].split("")

let strA = ""
let strB = ""

for(a of A){
    if(a >= "0" && a <= "9"){
        strA += a
    }else{
        continue
    }
}

for(b of B){
    if(b >= "0" && b <= "9"){
        strB += b
    }else{
        continue
    }
}

console.log(Number(strA) + Number(strB))