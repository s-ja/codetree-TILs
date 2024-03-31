const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let n = Number(input);

// console.log(solution(n));

// let acc = 0

function solution(n){
    let acc = 1
    if(n === 1){
        return acc - 1
    }

    if(n % 2 === 0){
        return acc += solution(n / 2)
    }else{
        return acc += solution(n * 3 + 1)
    }
}

// solution(n)
console.log(solution(n))

// let acc = 0

// while(n !== 1){
//     if(n % 2 === 0){
//         n = n / 2
//     }else{
//         n = n * 3 + 1
//     }
//     acc++
// }

// console.log(acc)