const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let n = Number(input)
let count = 0

while(true){
    n = n/2
    count++
    if(n === 1){
        break
    }
}

console.log(count)