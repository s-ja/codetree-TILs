const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let even = 0
let odd = 0

for(let i = 0; i < input.length; i+=2){
    even += Number(input[i])
}
for(let i = 1; i < input.length; i+=2){
    odd += Number(input[i])
}

if(even > odd){
    console.log(even - odd)
}else{
    console.log(odd - even)
}