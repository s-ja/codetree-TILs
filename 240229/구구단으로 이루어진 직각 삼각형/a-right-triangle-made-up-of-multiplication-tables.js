const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let str = ""

for(let i = 1; i <= n; i++){
    str = ""
    for(let j = 1; j <= n - i + 1; j++){
        if(j > n - i){
            str += `${i} * ${j} = ${i * j}`
        }else{
            str += `${i} * ${j} = ${i * j} / `
        }
    }
    console.log(str)
}