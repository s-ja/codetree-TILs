const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a = input[0]
let b = input[1]

let arr = Array(10).fill(0)

while(a > 1){
    // console.log(Math.floor(a / b), a%b)
    arr[a % b]++
    a = Math.floor(a / b)
}

// console.log(arr)
let result  = 0

for(a of arr){
    result += a**2
}

console.log(result)