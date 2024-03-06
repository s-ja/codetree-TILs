const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0].split("")
const b = input[1].split("")

for(let i = 0; i < a.length; i++){
    let tmp = ""
    for(let j = 0; j < b.length; j++){
        if(a[i + j] === b[j]){
            tmp += a[i + j]
        }
    }
    // console.log(tmp)
    if(tmp === b.join("")){
        // console.log(i)
        a.splice(i, b.length)
        i = 0
    }
    // console.log(a)
}

console.log(a.join(""))