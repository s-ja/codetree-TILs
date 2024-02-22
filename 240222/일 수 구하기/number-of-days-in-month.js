const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const month = Number(input)

if(month<8){
    if(month === 2){
        console.log(28)
    }else if(month%2===0){
        console.log(30)
    }else{
        console.log(31)
    }
}else if(month>7){
    if(month%2===0){
        console.log(31)
    }else{
        console.log(30)
    }
}