const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

// let str = ""

for(let i = 0; i < n; i++){
    let x = input[i].split(" ")
    let a = Number(x[0])
    let b = Number(x[1])
    let result = 1
    for(let j = a; j <= b; j++){
        result *= j
    }
    console.log(result)
}