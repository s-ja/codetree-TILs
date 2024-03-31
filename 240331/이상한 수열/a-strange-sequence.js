const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input)

console.log(solution(N));

function solution(n){
    if(n === 1){
        return 1
    }
    if(n === 2){
        return 2
    }

    return solution(parseInt(n / 3)) + solution(n - 1);
}