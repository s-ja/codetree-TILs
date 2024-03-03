const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let max = input[0]
let min = input[0]
for(a of input){
    if(a === 999 || a === -999){
        break
    }
    
    if(a > max){
        max = a
    }
    if(a < min){
        min = a
    }
}

console.log(max, min)