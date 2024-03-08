const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const A = input[0].split("")
const B = input[1].split("")
let strA = ""
let strB = ""

for(let a of A){
    if(a >= "0" && a <= "9"){
        strA += a
    }else{
        break
    }
}

for(let b of B){
    if(b >= "0" && b <= "9"){
        strB += b
    }else{
        break
    }
}

console.log(Number(strA) + Number(strB))