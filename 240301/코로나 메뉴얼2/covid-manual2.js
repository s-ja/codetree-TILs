const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let A = 0
let B = 0
let C = 0
let D = 0

for(a of input){
    [cold, temp] = a.split(" ")
    if(cold === "Y" && Number(temp) >= 37){
        A++
    }else if(cold === "N" && Number(temp) >= 37){
        B++
    }else if(cold === "Y" && Number(temp) < 37){
        C++
    }else{
        D++
    }
}

if(A >= 2){
    console.log(A, B, C, D + " E")
}else{
    console.log(A, B, C, D)
}