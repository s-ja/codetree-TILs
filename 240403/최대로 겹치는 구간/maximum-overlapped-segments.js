const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

const arr = []

for(elem of input){
    const [start, end] = elem.split(" ").map(Number)
    // console.log(start, end)
    for(let i = start; i < end; i++){
        if(!arr[i]){
            arr[i] = 1
        }else{
            arr[i]++
        }
    }
}

console.log(Math.max(...arr))