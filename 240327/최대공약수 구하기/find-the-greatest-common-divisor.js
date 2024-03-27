const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, m] = input.split(" ").map(Number)

function print(n, m){
    const nDivisor = []
    const mDivisor = []
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            nDivisor.push(i)
        }
    }
    for(let i = 1; i <= m; i++){
        if(m % i === 0){
            mDivisor.push(i)
        }
    }
    const intersection = nDivisor.filter(x => mDivisor.includes(x))
    console.log(Math.max(...intersection))
}

print(n, m);