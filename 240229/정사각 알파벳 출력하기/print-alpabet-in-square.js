const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let charCode = 65

for(let i = 0; i < n; i++){
    let str = ""
    for(let j = 0; j < n; j++){
        str += String.fromCharCode(charCode)
        charCode++
    }
    console.log(str)
}