const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

function cmp(prev, curr){
    return prev - curr
}

const arr1 = arr.sort(cmp)

for(elem of arr1){
    process.stdout.write(elem.toString() + " ")
}
const arr2 = arr1.reverse()
console.log()

for(elem of arr2){
    process.stdout.write(elem.toString() + " ")
}