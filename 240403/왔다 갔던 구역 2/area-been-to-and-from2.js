const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift())

const positions = []
let curr = 0

for(elem of input){
    const length = Number(elem.split(" ")[0])
    const direction = elem.split(" ")[1]
    if(direction === "L"){
        curr -= length
        positions.push(curr)
    }else{
        curr += length
        positions.push(curr)
    }
}

// console.log(positions)
const offset = Math.abs(Math.min(...positions))
// console.log(offset)

const arr = []
// console.log(arr)
let pointer = offset

for(elem of input){
    const length = Number(elem.split(" ")[0])
    const direction = elem.split(" ")[1]
    if(direction === "R"){
        for(let i = 0; i < length; i++){
            pointer++
            if(!arr[pointer]){
                arr[pointer] = 1
            }else{
                arr[pointer]++
            }
            // console.log(pointer)
        }
    }else{
        for(let i = 0; i< length; i++){
            pointer--
            if(!arr[pointer]){
                arr[pointer] = 1
            }else{
                arr[pointer]++
            }
            // console.log(pointer)
        }
    }
    // console.log(arr)
}

let cnt = 0

for(elem of arr){
    if(elem > 1){
        cnt++
    }
}

console.log(cnt)