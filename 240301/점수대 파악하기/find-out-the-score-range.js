const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = Array(10).fill(0)

let i = 0
while(input[i] !== 0){
    arr[Math.floor(input[i] / 10) - 1]++
    i++
}

// console.log(arr)

for(let i = 9; i >= 0; i--){
    console.log(`${(i+1)*10} - ${arr[i]}`)
}