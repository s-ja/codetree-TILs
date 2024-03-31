const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input)

console.log(solution(N));

function solution(n){
    // console.log(n)
    let tmp = 1
    if(n === 1){
        return tmp - 1
    }

    if(n % 2 === 0){
        return tmp + solution(parseInt(n / 2))
    }else{
        return tmp + solution(parseInt(n / 3))
    }
}