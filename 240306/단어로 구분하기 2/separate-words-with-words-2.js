const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

for(let i = 0; i < input.length; i++){
    if(i % 2 === 0){
        console.log(input[i])
    }
}