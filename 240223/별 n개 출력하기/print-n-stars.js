const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const a = Number(input)

let i = 0;
while(i<a){
    console.log("*")
    i++
}