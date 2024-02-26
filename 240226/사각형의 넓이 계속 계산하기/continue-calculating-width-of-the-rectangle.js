const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// let result = ""

for(let i = 0; i < input.length; i++){
    // result += Number(input[i].split(" ")[0]) * Number(input[i].split(" ")[1]) + " "
    console.log(Number(input[i].split(" ")[0]) * Number(input[i].split(" ")[1]))
    if(input[i].split(" ")[2] === "C"){
        break
    }
}

// console.log(result)