const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
const arr = input[1].split(" ").map(Number)

console.log(solution(arr));

function solution(arr){
    let tmp = ""
    for(elem of arr){
        if(elem % 2 === 0){
            tmp += (elem / 2) + " "
        }else{
            tmp += elem + " "
        }
    }
    return tmp
}