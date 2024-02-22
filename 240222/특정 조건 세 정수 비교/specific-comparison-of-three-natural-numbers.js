const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

// const [a,b,c] = input
const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])

let [d,e] = [0,0]

if(a<=b && a<=c){
    d=1
}else{
    d=0
}

if(a==b && a==c){
    e=1
}else{
    e=0
}

console.log(d,e)