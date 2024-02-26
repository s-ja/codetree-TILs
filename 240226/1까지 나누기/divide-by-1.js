const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const n = Number(input)

let a = n // 몫
let b = 1;
let count = 0

while(a >= 1){
    if(a <= 1){
        break
    }
    a = Math.floor(a / b)
    count++
    b++
}

console.log(count)