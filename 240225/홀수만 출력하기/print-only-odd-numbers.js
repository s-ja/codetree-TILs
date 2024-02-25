const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const num = Number(input.shift())

const arr = input

for(let i = 0; i <= num; i++){
    if(arr[i] % 2 !== 0 && arr[i] % 3 === 0){
        console.log(arr[i])
    }
}