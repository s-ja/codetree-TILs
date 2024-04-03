const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("").map(Number);

let n = 0

input.forEach(bit => n = n * 2 + bit)

n = n * 17

const binary = []

while(true){
    if(n < 2){
        binary.push(n)
        break
    }
    binary.push(n % 2)
    n = Math.floor(n / 2)
}

let result = ''

for(let i = binary.length - 1; i >= 0; i--){
    result += binary[i]
}

console.log(result)