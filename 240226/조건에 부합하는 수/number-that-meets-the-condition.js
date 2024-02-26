const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const a = Number(input)
let result = ""

for(let i = 1; i <= a; i++){
    if(i % 2 === 0 && i % 4 !== 0){
        continue
    }else if((Math.floor(i / 8)) % 2 === 0){
        continue
    }else if((i % 7) < 4){
        continue
    }else{
        result += (i + " ")
    }
}

console.log(result)