const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

const tmp = (a + b).toString().split("")
let cnt = 0

for(elem of tmp){
    if(elem === "1"){
        cnt++
    }
}

console.log(cnt)