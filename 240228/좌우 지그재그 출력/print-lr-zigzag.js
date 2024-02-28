const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let str = ""
let cnt = 1

for(let i  = 0; i < n; i++){
    str = ""
    if(i % 2 === 0){
        for(let j = 0; j < n; j++){
            str += cnt + " "
            cnt++
        }
    }else{
        for(let j = (i + 1) * n; j > (n * i); j--){
            str += j + " "
            cnt++
        }
    }
    console.log(str)
}