const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 1; i <= 2 * n + 1; i++){
    let str = ""
    for(let j = 1; j <= 2 * n + 1; j++){
        if((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 !== 0) || i % 2 !== 0 && j % 2 === 0){
            str += "* "
        }else{
            str += "  "
        }
    }
    console.log(str)
}