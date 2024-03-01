const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a = input[0]
let b = input[1]

let arr = Array(10).fill(0)

while(a > 1){
    a = Math.floor(a / b)
    arr[a % b]++
}

// console.log(arr)
let result  = 0

for(a of arr){
    result += a*a
}

console.log(result)