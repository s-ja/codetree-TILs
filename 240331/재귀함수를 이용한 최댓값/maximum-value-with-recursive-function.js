const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

console.log(solution(arr))

function solution(arr){
    if(arr.length === 1){
        return arr[0]
    }
    if(arr.length === 2){
        if(arr[0] > arr[1]){
            return arr[0]
        }else{
            return arr[1]
        }
    }

    if(arr[0] > solution(arr.slice(1))){
        return arr[0]
    }else{
        return solution(arr.slice(1))
    }
}