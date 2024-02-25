const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const year = Number(input)

let count = 0

for(let i = 1; i <= year; i++){
    if(i % 4 === 0){
        if(!(i % 100 === 0 && i % 400 !== 0)){
            count++
        }
    }
}

console.log(count)