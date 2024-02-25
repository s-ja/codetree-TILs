const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

let sum = 0
let count = 0

for(let i = a; i <= b; i++){
    if(i % 5 === 0 || i % 7 === 0){
        sum += i
        count++
    }
}

console.log(sum, (Math.round((sum/count)*10)/10).toFixed(1))