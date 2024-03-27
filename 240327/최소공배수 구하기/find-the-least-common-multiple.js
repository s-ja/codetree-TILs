const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, m] = input.split(" ").map(Number)

function print(n, m){
    const nMul = []
    const mMul = []
    
    for(let i = 1; i <= n*m; i++){
        nMul.push(n * i)
    }
    for(let i = 1; i <= n*m; i++){
        mMul.push(m * i)
    }
    const common = nMul.filter(x => mMul.includes(x))
    console.log(Math.min(...common))
}

print(n, m);