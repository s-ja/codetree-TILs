const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])

const arr = input[1].split(" ").map(Number)

// let result = [arr[0]]

let first = arr[0]
let second = null

for(let i = 1; i < n; i++){
    if(arr[i] > first){
        first = arr[i]
    }else if(!second ||arr[i] > second){
        second = arr[i]
    }
}

// console.log(result[0], result[1])
console.log(first, second)