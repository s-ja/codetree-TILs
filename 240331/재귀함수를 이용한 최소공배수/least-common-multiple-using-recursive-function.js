const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

console.log(solution1(arr));

function solution1(arr){
    if(arr.length === 1){
        return arr[0]
    }else if(arr.length === 2){
        return solution2(arr[0], arr[1])
    }else{
        return solution2(arr[0], solution1(arr.slice(1)))
    }

}

function solution2(a, b){
    const divisor = []
    for(let i = 1; i <= Math.min(a, b); i++){
        if(a % i === 0 && b % i === 0){
            divisor.push(i)
        }
    }
    const maxDivisor = Math.max(...divisor)
    return (a * b) / maxDivisor
}