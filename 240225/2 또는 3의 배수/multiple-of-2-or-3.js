const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const a = Number(input)
let result = ""

for(let i = 1; i <= a; i++){
    if(i % 2 === 0 || i % 3 === 0){
        result += (1 + " ")
    }else{
        result += (0 + " ")
    }
}

console.log(result)