const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

if(a>b){
    console.log(a*b)
}else[
    console.log(parseInt(b/a))
]