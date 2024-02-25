const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let sum = 0;
let count = 0;
// let avg = (Math.round((sum/count)*10)/10).toFixed(1)

for(let i = 0; i < input.length; i++){
    if(input[i] >= 0 && input[i] <= 200){
        sum += Number(input[i])
        count++
    }
    // console.log(sum, count, avg)
}

console.log(sum, (Math.round((sum/count)*10)/10).toFixed(1))