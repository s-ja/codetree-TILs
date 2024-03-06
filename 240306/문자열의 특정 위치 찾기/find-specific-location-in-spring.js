const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const char = input[1]
const str = input[0]

if(str.includes(char)){
    console.log(str.indexOf(char))
}else{
    console.log("No")
}