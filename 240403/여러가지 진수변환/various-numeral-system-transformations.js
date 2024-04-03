const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let [N, B] = input
const digits = []

while(true){
    if(N < B){
        digits.push(N)
        break
    }

    digits.push(N % B)
    N = Math.floor(N / B)
}

let result = ''
for(let i = digits.length - 1; i >= 0; i--){
    result += digits[i]
}

console.log(result)