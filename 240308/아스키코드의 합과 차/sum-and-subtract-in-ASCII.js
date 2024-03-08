const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let str = ""

str += input[0].charCodeAt(0) + input[1].charCodeAt(0) + " "

if(input[0].charCodeAt(0) > input[1].charCodeAt(0)){
    str += input[0].charCodeAt(0) - input[1].charCodeAt(0)
}else{
    str += input[1].charCodeAt(0) - input[0].charCodeAt(0)
}

console.log(str)