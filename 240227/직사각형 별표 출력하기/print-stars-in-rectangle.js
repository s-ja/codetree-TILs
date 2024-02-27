const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const n = Number(input[0])
const m = Number(input[1])

let str = ""

for(let i = 0; i < n; i++){
    let str = ""
    for(let j = 0; j < m; j++){
        str += ("*" + " ")
    }
    console.log(str)
}