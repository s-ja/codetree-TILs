const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

for(let i = 0; i < n; i++){
    let str = ""
    for(let j = n; j > 0; j--){
        str += j + " "
    }
    console.log(str)
}