const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])
let result = false

for(let i = a; i <= b; i++){
    if(i % c === 0){
        result = true
    }
}

if(result === true){
    console.log("YES")
}else{
    console.log("NO")
}