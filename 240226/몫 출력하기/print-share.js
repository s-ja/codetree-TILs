const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let count = 0;

for(let i = 0; i < input.length; i++){
    if(count >= 3){
        break
    }else if(Number(input[i]) % 2 === 0){
        console.log(Math.floor(input[i]/2))
        count++
    }
}