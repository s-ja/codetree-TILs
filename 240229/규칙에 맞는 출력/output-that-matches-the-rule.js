const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

for(let i = n; i >= 1; i--){
    let str = ""
    for(let j = i; j <= n; j++){
        str += j + " "
    }
    console.log(str)
}