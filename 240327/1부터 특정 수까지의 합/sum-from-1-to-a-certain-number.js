const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function print(n){
    let add = 0
    for(let i = 1; i <= n; i++){
        add += i
    }
    return Math.floor(add / 10);
}

console.log(print(input))