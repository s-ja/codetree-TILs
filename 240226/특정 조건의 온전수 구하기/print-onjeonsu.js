const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const n = Number(input)
let result = ""

for(let i = 1; i <= n; i++){
    if(i % 2 === 0 || i.toString()[0] === "5" || (i % 3 === 0 && i % 9 !== 0)){
        continue
    }else{
        result += (i + " ")
    }
}

console.log(result)