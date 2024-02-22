const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const month = Number(input)

if(month%2===0){
    if(month===2){
        console.log(28)
    }else{
        console.log(30)
    }
}else{
    console.log(31)
}