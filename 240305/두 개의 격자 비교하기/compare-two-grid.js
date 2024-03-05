const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n,m] = input[0].split(" ").map(Number)

let a = []
let b = []
let result = Array(n).fill(1).map(()=>Array(m).fill(1))

let i, j = 0

for(i = 1; i < n + 1; i++){
    a.push(input[i].split(" ").map(Number))
}
for(i = n + 1; i < input.length; i++){
    b.push(input[i].split(" ").map(Number))
}

for(i = 0; i < n; i++){
    for(j = 0; j < m; j++){
        if(a[i][j] === b[i][j]){
            result[i][j] = 0
        }
    }
}

for(i = 0; i < result.length; i++){
    let str = ""
    for(j = 0; j < result[i].length; j++){
        str += result[i][j] + " "
    }
    console.log(str)
}