const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = []
const b = []

let i, j, k = 0

for(i = 0; i < 3; i++){
    a.push(input[i].split(" "))
}

for(i = 4; i < 7; i++){
    b.push(input[i].split(" "))
}

for(i = 0; i < 3; i++){
    let str = ""
    for(j = 0; j < 3; j++){
        str += a[i][j] * b[i][j] + " "
    }
    console.log(str)
}