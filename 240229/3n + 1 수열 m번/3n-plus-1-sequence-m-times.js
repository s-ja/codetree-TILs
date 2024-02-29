const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const m = Number(input.shift())

// console.log(m, input)

let cnt = 0

for(let i = 0; i < m; i++){
    cnt = 0
    let n = Number(input[i])
    while(n !== 1){
        if(n % 2 === 0){
            // n = Math.floor(n / 2)
            n = n / 2
            cnt++
        }else{
            n = n * 3 + 1
            cnt++
        }
    }
    console.log(cnt)
}