const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function print(n){
    for(let i = 0; i < n; i++){
        process.stdout.write("12345^&*()_\n");
    }
}

print(input)