const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const a = input[0]
const b = input[1]

let result = ""

for(let i = a; i<=b; i++){
    if(i % 2 !== 0){
        result += (i+" ")
    }
}

console.log(result)