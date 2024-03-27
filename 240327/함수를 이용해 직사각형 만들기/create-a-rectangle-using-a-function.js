const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const [n,m] = input.split(" ").map(Number)

function print(n, m){
    for(let i = 0; i < n; i++){
        let one = ""
        for(let j = 0; j < m; j++){
            one += "1"
        }
        console.log(one)
    }
}

print(n, m);