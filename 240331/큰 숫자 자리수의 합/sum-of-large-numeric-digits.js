const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(solution(input))

function solution(input){
    const acc = input.reduce((acc, curr)=> acc * curr, 1);
    return solution2(acc)
}

function solution2(acc){
    if(acc < 10){
        return acc
    }

    return (acc % 10) + solution2(parseInt(acc / 10))
}