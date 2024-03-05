const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const n = Number(input[0])
const m = Number(input[1])
let num = 0

const arr = Array(n).fill(0).map(()=>Array(m).fill(0))

for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
        if(i % 2 === 0){
            arr[j][i] = num
            num++
        }else{
            arr[n - j - 1][i] = num
            num++
        }
    }
}

for(let i = 0; i < arr.length; i++){
    let str = ""
    for(let j = 0; j < arr[i].length; j++){
        str += arr[i][j] + " "
    }
    console.log(str)
}