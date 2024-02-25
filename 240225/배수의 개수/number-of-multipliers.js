const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let three = 0
let five = 0

for(let i = 0; i < input.length; i++){
    if(input[i] % 3 === 0 && input[i] % 5 === 0){
        three ++
        five++
    }else if(input[i] % 5 === 0){
        five++
    }else if(input[i] % 3 === 0){
        three ++
    }
}

console.log(three, five)