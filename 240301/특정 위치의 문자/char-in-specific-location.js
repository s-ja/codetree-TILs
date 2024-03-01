const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const arr = ['L', 'E', 'B', 'R', 'O', 'S']

let cnt = 0

for(a of arr){
    if(a === input){
        console.log(cnt)
    }else{
        cnt++
    }
}

if(cnt >= arr.length){
    console.log("None")
}