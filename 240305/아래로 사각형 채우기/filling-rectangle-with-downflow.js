const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)

let arr = Array(n).fill(0).map(()=>Array(n).fill(0))

for(let i = 0; i < n; i++){
    let tmp = i + 1
    for(let j = 0; j < n; j++){
        arr[i][j] = tmp
        tmp += n
    }
}

for(let i = 0; i < n; i++){
    let str = ""
    for(let j = 0; j < n; j++){
        str += arr[i][j] + " "
    }
    console.log(str)
}