const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0; i < input.length; i++){
    let sum = 0;
    let arr = input[i].split(" ").map(Number)
    for(let j = 0; j < arr.length; j++){
        sum += arr[j]
    }
    console.log(sum)
}