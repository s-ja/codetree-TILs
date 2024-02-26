const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0; i < input.length; i++){
    if(Number(input[i]) === 1){
        console.log("John")
    }else if(Number(input[i]) === 2){
        console.log("Tom")
    }else if(Number(input[i]) === 3){
        console.log("Paul")
    }else if(Number(input[i]) === 4){
        console.log("Sam")
    }else{
        console.log("Vacancy")
        break
    }
}