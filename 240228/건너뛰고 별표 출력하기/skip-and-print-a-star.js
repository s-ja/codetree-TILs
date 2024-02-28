const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();


const n = Number(input)

for(let i = n; i > 0; i--){
    let str = ""
    for(let j = 0; j < n - i + 1; j++){
        str += "*"
    }
    console.log(str + "\n")
}
// console.log("break")

for(let i = 1; i < n; i++){
    let str = ""
    for(let j = 0; j < n - i; j++){
        str += "*"
    }
    console.log(str + "\n")
}