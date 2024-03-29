const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
const arr = input[1].split(" ").map(Number)

function solution(arr){
    let result = ""
    for(elem of arr){
        if(elem < 0){
            result += -elem + " "
        }else{
            result += elem + " "
        }
    }

    console.log(result)
}

solution(arr)