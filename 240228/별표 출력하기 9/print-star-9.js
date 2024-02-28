const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i++){
    let str = ""
    for(let j = 0; j < (n - i - 1)*2; j++){
        str += " "
    }
    for(let j = 0; j < i * 2 + 1 ; j++){
        str += "*" + " "
    }
    console.log(str)
}