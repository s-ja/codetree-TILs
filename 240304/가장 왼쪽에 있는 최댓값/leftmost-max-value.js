const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0])
const arr = input[1].split(" ").map(Number)

const positions = []
let searchEnd = arr.length

while(searchEnd > 0){
    let maxVal = -1
    let maxIndex = -1
    for(i = 0; i < searchEnd; i++){
        if(arr[i] > maxVal){
            maxVal = arr[i]
            maxIndex = i
        }
    }
    positions.push(maxIndex + 1)
    searchEnd = maxIndex
}

console.log(...positions)