const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)

for(let i = n; i > 0; i--){
    let str = ""
    for(let j = i; j > 0; j--){
        str += ("*" + " ")
    }
    console.log(str)
}