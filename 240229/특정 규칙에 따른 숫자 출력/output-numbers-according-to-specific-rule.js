const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let cnt = 1
for(let i = n; i >= 1; i--){
    let str = ""
    for(let j = 0; j < (n - i) * 2; j++){
        str += " "
    }
    for(let j = 0; j < i; j++){
        str += cnt + " "
        cnt++
        if(cnt > 9){
        cnt = 1
        }
    }
    console.log(str)
}