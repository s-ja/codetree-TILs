const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const a = Number(input)

if((a%2!==0 && a%3===0)||(a%2===0 && a%5===0)){
    console.log('true')
}else{
    console.log('false')
}