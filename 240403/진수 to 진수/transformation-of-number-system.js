const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number)
let n = input[1].split("").map(Number)

let binary = 0

n.forEach(bit => binary = binary * a + bit)

// console.log(binary)

const digits = []

while(true){
    if(binary < b){
        digits.push(binary)
        break
    }

    digits.push(binary % b)
    binary = Math.floor(binary / b)
}

let result = ''

for(let i = digits.length - 1; i >= 0; i--){
    result += digits[i]
}

console.log(result)