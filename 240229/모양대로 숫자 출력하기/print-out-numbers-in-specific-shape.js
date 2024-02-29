const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

for(let i = n; i >= 1; i--){
    let str = ""
    for(let j = 0; j < (n - i) * 2; j++){
        str += " "
    }

    for(let j = i; j >= 1; j--){
        str += j + " "
    }
    console.log(str)
}