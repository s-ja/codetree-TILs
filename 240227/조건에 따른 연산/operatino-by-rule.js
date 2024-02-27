const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input)
let count = 0
while(true){
    if(n > 1000){
        break
    }
    if(n % 2 === 0){
        n = n * 3 +1
        count++
    }else{
        n = n * 2 + 2
        count++
    }
}

console.log(count)