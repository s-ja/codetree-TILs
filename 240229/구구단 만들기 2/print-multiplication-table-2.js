const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = Number(input[0])
const b = Number(input[1])

for(let i = 2; i <= 8; i += 2){
    let str = ""
    for(let j = b; j >= a; j--){
        str += `${j} * ${i} = ${j * i}`
        if(j > a){
            str += " / "
        }
    }
    console.log(str)
}