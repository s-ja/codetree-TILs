const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])

const arr = input[1].split(" ").map(Number)

// const cheap = Math.min(...arr)
// const expensive = Math.max(...arr)

let maxProfit = 0;
let minPirce = arr[0];

for(let i = 1; i < n; i++){
    const profit = arr[i] - minPirce;

    maxProfit = Math.max(maxProfit, profit);

    minPirce = Math.min(minPirce, arr[i])
}

console.log(maxProfit)