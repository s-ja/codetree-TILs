const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for(elem of input){
    if(elem === "END"){
        break
    }else{
        let str = ""
        let tmp = elem.split("")
        for(let i = tmp.length - 1; i >= 0; i--){
            str += tmp[i]
        }
        console.log(str)
    }
}