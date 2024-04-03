const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift())

const arr = []

for(elem of input){
    const [start, end] = elem.split(' ').map(Number)
    for(let i = start; i <= end; i++){
        if(!arr[i]){
            arr[i] = 1
        }else{
            arr[i]++
        }
    }
}

// console.log(Math.max(...arr))
// console.log(arr)
let maxVal = 0

for(elem of arr){
    if(elem > maxVal){
        maxVal = elem
    }
}

console.log(maxVal)