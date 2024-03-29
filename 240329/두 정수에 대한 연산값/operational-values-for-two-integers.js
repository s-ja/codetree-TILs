const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [a, b] = input

console.log(solution(a, b));

function solution(a, b){
    if(a > b){
        a += 25
        b *= 2
    }else{
        b += 25
        a *= 2
    }

    const result = a + " " + b
    return result
}