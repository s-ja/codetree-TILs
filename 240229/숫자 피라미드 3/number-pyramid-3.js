const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

for(let i = 1; i <= n; i++){
    let str = ""
    for(let j = i; j <= i * i; j+=i){
        str += j + " "
    }
    console.log(str)
}