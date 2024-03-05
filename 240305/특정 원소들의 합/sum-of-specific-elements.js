const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let arr = []
let result = 0
for(let i = 0; i < 4; i++){
    arr.push(input[i].split(" ").map(Number))
}

for(let i = 0; i < 4; i++){
    for(let j = 0; j < i + 1; j++){
        result += arr[i][j]
    }
}

console.log(result)