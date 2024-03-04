const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])

const arr = input[1].split(" ").map(Number)

let result = [0];

const cheap = Math.min(...arr)

for(let i = arr.indexOf(cheap); i < n; i++){
    if(arr[i] > cheap){
        result.push(arr[i] - cheap)
    }
}

console.log(Math.max(...result))