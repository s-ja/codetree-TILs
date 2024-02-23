const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0])
const b = Number(input[1])
let result = ""
while(a<=b){
    if(a%2===0){
        result += (a + " ")
    }
    a++
}

console.log(result)