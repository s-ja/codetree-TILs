const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

input = input[0].split(" ")
let cnt = 0

for(a of input){
    // console.log(typeof a, a)
    cnt += Number(a)
}

const avg = (cnt/n).toFixed(1)

console.log(avg)

if(avg >= 4.0){
    console.log("Perfect")
}else if(avg >= 3.0){
    console.log("Good")
}else{
    console.log("Poor")
}