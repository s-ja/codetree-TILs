const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const n = Number(input)

let a = n // 몫
let b = 1;
let count = 0

while(a >= 1){
    a = Math.floor(a / b)
    // console.log(a)
    count++
    // console.log(count)
    b++
}

console.log(count)