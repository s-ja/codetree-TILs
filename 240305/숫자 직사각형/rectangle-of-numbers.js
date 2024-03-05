const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const n = Number(input[0])
const m = Number(input[1])

let arr = Array(n).fill(0).map(() => Array(m).fill(0))

let num = 1;

for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        arr[i][j] = num;
        num++
    }
}

for(a of arr){
    str = ""
    for(b of a){
        str += b + " "
    }
    console.log(str)
}