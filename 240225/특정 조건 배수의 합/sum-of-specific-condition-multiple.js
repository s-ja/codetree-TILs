const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0])
let b = Number(input[1])

let result = 0

if(b<a){
    [a,b] = [b,a]
}

for(let i = a; i <= b; i++){
    if(i % 5 === 0){
        result += i
    }
}

console.log(result)