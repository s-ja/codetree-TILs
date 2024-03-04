const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

let minDiff = arr[n-1] - arr[n-2];

for(let i = n - 1; i >= 1; i--){
    const diff = arr[i] - arr[i - 1]
    minDiff = Math.min(diff, minDiff)
    // console.log(diff)
}

console.log(minDiff)