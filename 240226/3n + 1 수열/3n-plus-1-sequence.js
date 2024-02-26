const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let n = Number(input)
let count = 0;

while(true){
    if(n % 2 === 0){
        n = Math.floor(n / 2)
        count++
    }else{
        n = (n * 3) + 1
        count++
    }

    if(n === 1){
        break
    }
}

console.log(count)