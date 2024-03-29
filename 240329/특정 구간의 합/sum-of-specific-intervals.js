const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input.shift().split(" ").map(Number)
const arr = input.shift().split(" ").map(Number)

// console.log(n, m)
// console.log(arr)
// console.log(input)

solution(input)

function solution(input){
    for(elem of input){
        let [a, b] = elem.split(" ").map(Number).map(a => a-1)
        let acc = 0
        for(let i = a; i <= b; i++){
            acc += arr[i]
        }
        console.log(acc)
    }
}