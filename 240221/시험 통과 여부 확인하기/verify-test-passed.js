const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

input = Number(input)

if(input >= 80){
    console.log('pass')
}else{
    console.log(`${80-input} more score`)
}