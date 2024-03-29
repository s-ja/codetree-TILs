const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input)

first(N)
console.log()
last(N)

function first(n){
    if(n === 0){
        return
    }
    first(n - 1)
    process.stdout.write(n.toString() + " ")
}

function last(n){
    if(n === 0){
        return
    }
    process.stdout.write(n.toString()+ " ")
    last(n - 1)
}