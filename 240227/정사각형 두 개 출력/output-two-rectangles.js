const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)

for(let k = 0; k < 2; k++){
    let result = ""
    for(let i = 0; i < n; i++){
        let sqr = ""
        for(let j = 0; j < n; j++){
            sqr += "*"
        }
        result += (sqr + "\n")
    }
    console.log(result)
}