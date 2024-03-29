const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input)

hello(N)

function hello(n){
    if(n === 0){
        return
    }

    hello(n - 1)
    console.log("HelloWorld")
}