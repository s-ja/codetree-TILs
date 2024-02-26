const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

let prod = 1;

for(let i = a; i <= b; i++){
    prod *= i;
}


console.log(prod)