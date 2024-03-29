const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [a, b] = input

console.log(solution(a, b))

function solution(a, b){
    let result = ""
    if(a > b){
        result += (a * 2) + " "
        result += (b + 10) + " "
    }else{
        result += (a + 10) + " "
        result += (b * 2) + " "
    }

    return result
}