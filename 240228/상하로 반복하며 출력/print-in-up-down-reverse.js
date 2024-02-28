const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let str = ""

for(let i = 0; i < n; i++){
    str = ""
    for(let j = 0; j < n; j++){
        if(i % 2 === 0){
            if(j % 2 === 0){
                str += i + 1
            }else{
                str += n - i
            }
        }else{
            if(j % 2 === 0){
                str += i + 1
            }else{
                str += n - i
            }
        }
    }
    
    console.log(str)
}