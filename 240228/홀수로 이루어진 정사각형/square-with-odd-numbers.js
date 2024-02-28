const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());


for(let i = 11; i < 11 + (n * 2 - 1); i+=2){
    let str = ""
    for(let j = i; j < i + (n * 2 - 1); j+=2){
        str += j + " "
    }
    console.log(str)
}