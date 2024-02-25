const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const days = Number(input)

let a = 0; //교실
let b = 0; //복도
let c = 0; //화장실

for(let i = 1; i <= days; i++){
    if(i % 2 === 0 && i % 3 && i % 12 === 0){
        c++
    }else if(i % 2 === 0 && i % 3 === 0){
        b++
    }else if(i % 2 === 0){
        a++
    }else if(i % 3 === 0){
        b++
    }else if(i % 12 === 0){
        c++
    }
}

console.log(a,b,c)