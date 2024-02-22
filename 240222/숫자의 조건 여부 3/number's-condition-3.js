const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input)

if(a%13===0 || a%19===0){
    console.log('True')
}else{
    console.log('False')
}