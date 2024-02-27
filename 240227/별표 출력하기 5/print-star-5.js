const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)

for(let i = n; i > 0; i--){
    let result = ""
    for(let j = i; j > 0; j--){
        let str = ""
        for(let k = 0; k < i; k++){
            str += "*"
        }
        result += str + " "
    }
    console.log(result)
}