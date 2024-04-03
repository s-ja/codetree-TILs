const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let n = Number(input)

const list = []

while(true){
    if(n < 2){
        list.push(n)
        break
    }
    list.push(n % 2)
    n = Math.floor(n / 2)
}

let binary = ''
for(let i = list.length - 1; i >= 0; i--){
    binary += list[i]
}

console.log(binary)