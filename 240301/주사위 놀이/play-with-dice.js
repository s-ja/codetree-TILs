const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = Array(6).fill(0)

for(a of input){
    arr[a-1]++
}

// console.log(arr)

for(let i = 1; i <= 6; i++){
    console.log(`${i} - ${arr[i-1]}`)
}