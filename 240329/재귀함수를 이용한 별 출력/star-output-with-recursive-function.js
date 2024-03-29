const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input)

print(N)

function print(n){
    if(n === 0){
        return
    }
    print(n - 1)
    for(let i = 0; i < n; i++){
        process.stdout.write("*")
    }
    console.log()
}