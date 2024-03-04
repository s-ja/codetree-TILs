const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let over = null
let under = null

for(const a of input){
    if(a > 500){
        if(!over){
            over = a
        }else if(a < over){
            over = a
        }
    }else if(a < 500){
        if(!under){
            under = a
        }else if(a > under){
            under = a
        }
    }
}

console.log(under, over)