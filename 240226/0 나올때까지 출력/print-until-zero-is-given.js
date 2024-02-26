const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0; i < input.length; i++){
    if(Number(input[i]) === 0){
        break
    }
    console.log(input[i])
}