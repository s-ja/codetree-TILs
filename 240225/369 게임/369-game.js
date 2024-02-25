const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

let result = ""

for(let i = 1; i <= n; i++){
    if(i % 3 === 0){
        result += (0 + " ")
    }else if(i.toString().includes(3) || i.toString().includes(6) || i.toString().includes(9)){
        result += (0 + " ")
    }else{
        result += (i + " ")
    }
}

console.log(result)