const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input)

console.log(solution(N))

function solution(n){
    if(n < 10){
        return n**2
    }
    return solution(parseInt(n / 10)) + (n % 10)**2
}