const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

for(let i = 0; i < n; i++){
    let tmp = input[i].split(" ")
    let a = Number(tmp[0])
    let b = Number(tmp[1])
    let result = 0
    for(let j = a; j <= b; j++){
        if(j % 2 === 0){
            result += j
        }
    }
    console.log(result)
}