const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let str = ""

for(let i = 1; i <= n; i++){
    str = ""
    for(let j = 1; j <= i; j++){
        str += j + " "
    }
    console.log(str)
}