const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let a = Number(input[0])
let b = Number(input[1])

if(b > a){
    [a,b] = [b,a]
}

for(let i = 1; i < 10; i++){
    let str = ""
    for(let j = a; j >= b; j-=2){
        str += `${j} * ${i} = ${i*j}`
        if(j > b){
            str += " / "
        }
    }
    console.log(str)
}