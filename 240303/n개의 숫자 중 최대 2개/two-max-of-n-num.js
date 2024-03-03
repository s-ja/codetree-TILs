const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])

const arr = input[1].split(" ").map(Number)


let first = arr[0]
let tmp = []

for(let i = 1; i < n; i++){
    if(arr[i] > first){
        tmp.push(first)
        first = arr[i]
    }else{
        tmp.push(arr[i])
    }
}

let second = tmp[0]

for(let i = 1; i < tmp.length; i++){
    if(tmp[i] > second){
        second = tmp[i]
    }
}

// console.log(tmp)
console.log(first, second)