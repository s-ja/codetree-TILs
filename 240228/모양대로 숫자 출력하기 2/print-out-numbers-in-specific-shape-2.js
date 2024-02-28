const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let str = ""
let cnt = 2

for(let i = 0; i < n; i++){
    str = ""
    // cnt = 2
    for(let j = 0; j < n; j++){
        if(cnt >= 10) cnt = 2
        str += cnt + " "
        cnt += 2
    }
    console.log(str)
}