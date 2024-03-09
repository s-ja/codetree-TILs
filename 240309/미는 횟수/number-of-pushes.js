const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0]
const b = input[1]

let cnt = 0

for(let i = 0; i < a.length; i++){
    if(a === b){
        break
    }else{
        a = a.slice(-1) + a.slice(0, a.length - 1)
        cnt++
    }
}

if(cnt === a.length){
    console.log(-1)
}else{
    console.log(cnt)
}