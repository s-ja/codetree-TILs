const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input)

console.log(solution(N))

function solution(n){
    if(n === 0){
        return 0
    }

    return solution(n - 1) + n
}