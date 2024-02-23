// const fs = require("fs");
// let input = fs.readFileSync(0).toString().trim();

let result = []

for(let i = 5; i<18; i++){
    result.push(i)
}

console.log(result.toString().replaceAll(",", " "))