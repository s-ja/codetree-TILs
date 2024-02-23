const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let b = Number(input[0])
const a = Number(input[1])

// console.log(a,b)

let result = ""

while(b>=a){
    result += (b + " ")
    b -= 2
}

console.log(result)