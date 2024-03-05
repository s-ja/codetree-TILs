const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const n = Number(input[0])
const m = Number(input[1])

let arr = Array(n).fill(0).map(()=>Array(m).fill(0))

let num = 1;

for(let sum = 0; sum <= n + m - 2; sum++){
    for(let i = 0; i <= sum; i++){
        let j = sum - i
        if(i >= n || j >= m){
            continue
        }
        arr[i][j] = num++;
    }
}

for(let i = 0; i < arr.length; i++){
    let str = ""
    for(let j = 0; j < arr[i].length; j++){
        str += arr[i][j] + " "
    }
    console.log(str)
}