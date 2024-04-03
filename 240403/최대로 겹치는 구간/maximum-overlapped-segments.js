const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

const arr = []
let offset = 0
// let last = 0

for(elem of input){
    const [start, end] = elem.split(" ").map(Number)
    if(start < offset){
        offset = start
    }
}

offset = Math.abs(offset)

for(elem of input){
    const [start, end] = elem.split(" ").map(Number)
    for(let i = start + offset; i < end + offset; i++){
        if(!arr[i]){
            arr[i] = 1
        }else{
            arr[i]++
        }
    }
}

console.log(Math.max(...arr))
// console.log(arr)