const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

let result = 0

for(let i = a; i <= b; i++){
    let cnt = 0
    for(let j = 1; j < i; j++){
        if(i % j === 0){
            cnt++
        }
    }
    if(cnt === 3){
        result++
    }
}

console.log(result)