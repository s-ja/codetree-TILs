const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let str = ""
let cnt = 0

for(let i = 0; i < n; i++){
    str = ""
    for(let j = 0; j < n; j++){
        str += (cnt + 1)
        cnt++
        if(cnt > 8){
            cnt = 0
        }
    }
    console.log(str)
}