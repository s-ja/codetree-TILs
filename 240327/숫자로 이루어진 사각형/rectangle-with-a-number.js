const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const n = Number(input)

function print(n){
    let num = 1
    for(let i = 0; i < n; i++){
        let line = ""
        for(let j = 0; j < n; j++){
            line += num + " "
            num++
            if(num === 10){
                num = 1
            }
        }
        console.log(line)
    }
}

print(n)