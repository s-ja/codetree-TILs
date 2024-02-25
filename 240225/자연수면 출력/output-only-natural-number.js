const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

let result = ""

if(a>=0){
    for(let i = 0; i < b; i++){
        result += a
    }
}else{
    result += 0
}

console.log(result)