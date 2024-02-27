const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)

let str = ""

for(let i = 0; i < n; i++){
    let str = ""
    for(let j = 0; j < n; j++){
        str += "*"
    }
    console.log(str)
}