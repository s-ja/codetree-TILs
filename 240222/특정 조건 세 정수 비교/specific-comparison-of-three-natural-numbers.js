const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a,b,c] = input

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