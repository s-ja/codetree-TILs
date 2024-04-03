const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input.shift().split(' ').map(Number)

// console.log(N, K)
// console.log(input)

const arr = Array(N).fill(0)

// console.log(arr)

for(elem of input){
    const [start, end] = elem.split(" ").map(Number)
    for(let i = start - 1; i <= end - 1; i++){
        arr[i]++
    }
}

console.log(Math.max(...arr))