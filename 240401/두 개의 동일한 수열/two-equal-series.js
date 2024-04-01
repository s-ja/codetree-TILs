const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0])
const arrA = input[1].trim().split(" ").map(Number)
const arrB = input[2].trim().split(" ").map(Number)

arrA.sort((a,b) => a - b)
arrB.sort((a,b) => a - b)

let result = "Yes"

for(let i = 0; i < n; i++){
    if(arrA[i] !== arrB[i]){
        result = "No"
    }
}

console.log(result)