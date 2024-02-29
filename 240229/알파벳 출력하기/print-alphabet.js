const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let charCode = 65

for(let i = 0; i < n; i++){
    let str = ""
    for(let j = 0; j <= i; j++){
        str += String.fromCharCode(charCode)
        charCode++
        if(charCode > Z.charCodeAt()){
            charCode = A.charCodeAt()
        }
    }
    console.log(str)
}