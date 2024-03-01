const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let str = ""

for(a of input){
    if(Number(a) === 0){
        break
    }

    if(Number(a) % 2 === 0){
        str += Number(a)/2 + " "
    }else{
        str += (Number(a) + 3) + " "
    }
}

console.log(str)