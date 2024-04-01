const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)


for(let i = 1; i <= n; i++){
    if(i % 2 !== 0){
        process.stdout.write(findCenter(arr.slice(0, i)) + " ")
    }
}

function findCenter(arr){
    arr.sort()
    return arr[parseInt(arr.length / 2)]
}