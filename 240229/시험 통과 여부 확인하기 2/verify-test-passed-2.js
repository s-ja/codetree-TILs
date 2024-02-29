const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift())

// console.log(n, input)
let cnt = 0

for(let i = 0; i < n; i++){
    let std = input[i].split(" ")   
    let acc = 0
    for(a of std){
        acc += Number(a)
    }
    let avg = acc/std.length
    if(avg >= 60){
        console.log("pass")
        cnt++
    }else{
        console.log("fail")
    }
}
console.log(cnt)