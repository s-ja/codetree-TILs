const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

let tmp1 = []
let tmp2 = []

for(let i = 1; i <= 1920; i++){
    if(1920 % i === 0){
        tmp1.push(i)
    }
}


for(let i = 1; i <= 2880; i++){
    if(2880 % i === 0){
        tmp2.push(i)
    }
}

let result = tmp1.filter(x => tmp2.includes(x))
let answer = 0

for(let i = a; i <= b; i++){
    if(result.includes(i)){
        answer = 1
    }
}

console.log(answer)