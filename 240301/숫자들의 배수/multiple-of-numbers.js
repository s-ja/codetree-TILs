const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = Number(input)

let arr = Array(10)

let str = ""

for(let i = 0; i < arr.length; i++){
    arr[i] = n * (i+1)
}

// console.log(arr)

let cnt = 0
for(a of arr){
    if(a % 5 === 0){
        cnt++
        // console.log(cnt)
    }
    str += a + " "
    if(cnt === 2){
        break
    }
}

console.log(str)