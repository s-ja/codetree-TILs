const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const n = Number(input)
let count = 0

for(let i = 1; i <= n; i++){
    if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0){
        continue
    }else{
        count++
    }
}

console.log(count)