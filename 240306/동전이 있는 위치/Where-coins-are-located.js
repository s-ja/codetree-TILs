const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number)

let placed = []

for(let i = 1; i <= m; i++){
    placed.push(input[i].split(" ").map(Number))
}

let arr = Array(n).fill(0).map(() => Array(n).fill(0));

for(let i = 0; i < m; i++){
    arr[placed[i][0] - 1][placed[i][1] - 1] = 1
}

for(let i = 0; i < n; i++){
    let str = ""
    for(let j = 0; j < n; j++){
        str += arr[i][j] + " "
    }
    console.log(str)
}