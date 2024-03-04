const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])

const arr = input[1].split(" ").map(Number)

const cheap = Math.min(...arr)
const expensive = Math.max(...arr)
let profit1 = 0
let profit2 = 0

for(let i = arr.indexOf(cheap); i <= n; i++){
    if(arr[i] > cheap){
        profit1 = arr[i]
    }
}

for(let i = arr.indexOf(expensive); i >= 0; i--){
    if(arr[i] < expensive){
        profit2 = arr[i]
    }
}

// console.log(profit1, profit2)

if(profit1 !== 0){
    profit1 = profit1 - cheap
}
if(profit2 !== 0){
    profit2 = expensive - profit2
}


// console.log(profit1, profit2)

console.log(Math.max(profit1, profit2))

// console.log(arr.indexOf(cheap))
// console.log(arr.indexOf(expensive))
// console.log(cheap, expensive)
// console.log(profit1, profit2)