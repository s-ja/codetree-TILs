const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = ""

for(let i = 0; i < n; i++){
    str = ""
    for(let j = 0; j < n; j++){
        if(i % 2 === 0){
            str += j + 1
        }else{
            str += n - j
        }
    }
    console.log(str)
}