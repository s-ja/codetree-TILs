const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

// console.log(a,b)

let cnt = 0
let tmp = 0

for(let i = a; i <= b; i++){
    tmp = 0
    for(let j = 1; j < i; j++){
        if(i % j === 0){
            tmp += j
        }
    }
    if(tmp === i){
        cnt++
    }
    // console.log(tmp)
}
console.log(cnt)