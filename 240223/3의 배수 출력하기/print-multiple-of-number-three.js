const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
input = Number(input)
let i = 1
let result = ""

while(i<=input){
    if(i%3===0){
        result += (i + " ")
    }
    i++
}

console.log(result)