const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

console.log(input**2)

if(input<5){
    console.log("tiny")
}