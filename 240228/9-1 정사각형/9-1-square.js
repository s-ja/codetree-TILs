const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let str = ""
let cnt = 9

for(let i = 0; i < n; i++){
    str = ""
    for(let j = 0; j < n; j++){
        if(cnt < 1) cnt = 9
        str += cnt
        cnt -= 1
    }
    console.log(str)
}