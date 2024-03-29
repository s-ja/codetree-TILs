const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)

console.log(solution(arr))

function solution(arr){
    let acc = arr[m - 1]
    while(m !== 1){
        if(m % 2 === 0){
            m = m / 2
            acc += arr[m - 1]
        }else{
            m -= 1
            acc += arr[m - 1]
        }
    }
    return acc
}