const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

solution(input)

function solution(n){
    if(n === 0){
        return
    }

    for(let i = 0; i < n; i++){
        process.stdout.write("* ")
    }
    console.log()
    solution(n - 1)
    for(let i = 0; i < n; i++){
        process.stdout.write("* ")
    }
    console.log()
}