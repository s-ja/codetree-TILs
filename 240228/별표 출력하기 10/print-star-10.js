const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

count1  = 0
count2  = 0
for(let i = 1; i <= n * 2; i++){
    str = ""
    if(i % 2 !== 0){
        for(let j = 0; j < count1 + 1; j++){
            str += "*" + " "
        }
        count1++
    }else{
        for(let j = 0; j < n - count2; j++){
            str += "*" + " "
        }
        count2++
    }
    console.log(str)
}