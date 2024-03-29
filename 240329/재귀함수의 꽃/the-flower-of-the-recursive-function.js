const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

// const N = Number(input)

solution(input)

function solution(n){
    if(n === 0){
        return
    }

    process.stdout.write(n + " ")
    solution(n - 1)
    process.stdout.write(n + " ")
}