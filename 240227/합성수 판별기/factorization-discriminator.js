const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input)

if(n === 2 || (n % 2 === 1 && n % 3 === 1)){
    console.log("N")
}else{
    console.log("C")
}

// console.log(n % 2)
// console.log(n % 3)