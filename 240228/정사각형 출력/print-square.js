const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let cnt = 0
for(let i = 0; i < n; i++){
    let str = ""
    for(let j = 0; j < n; j++){
        str += (cnt + 1) + " "
        cnt++
    }
    console.log(str)
}