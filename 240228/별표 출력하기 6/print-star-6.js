const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = n; i > 0; i--){
    let str = ""
    for(let j = 0; j < (n - i) * 2; j++){
    str += " "
    }
    for(let j = 0; j < i * 2 -1; j++){
        str += "*" + " "
    }
    console.log(str)
}
for(let i = n - 1; i > 0; i--){
    let str = ""
    for(let j = 0; j < i * 2 - 2; j++){
    str += " "
    }
    for(let j = 0; j < (n - i) * 2 + 1; j++){
    str += "*" + " "
    }
    console.log(str)
}