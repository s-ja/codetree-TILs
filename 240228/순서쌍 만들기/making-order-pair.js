const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

for(let i = n; i > 0; i--){
    let str = ""
    for(let j = n; j > 0; j--){
        str += "(" + i + "," + j + ")" + " "
    }
    console.log(str)
}