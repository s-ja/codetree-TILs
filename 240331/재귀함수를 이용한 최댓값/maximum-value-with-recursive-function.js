const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

console.log(solution(n, arr))

function solution(n, arr){
    if (n === 1) {
        return arr[0];
    }

    const tmp = solution(n - 1, arr.slice(1));
    // return arr[0] > tmp ? arr[0] : tmp
    if(arr[0] > tmp){
        return arr[0]
    }else{
        return tmp
    }
}