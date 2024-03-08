const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0]
const b = input[1]

let cnt = 0

for(let i = 0; i < b.length; i++){
    if(a !== b){
        a = a.slice(1) + a.slice(0, 1)
        cnt++
    }else if(a === b){
        break
    }
}

if(cnt > 0){
    console.log(cnt)
}else{
    console.log(-1)
}