const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)

let arr = []
let i = 1
arr[0] = 1
arr[1] = n
let str = ""

while(arr[i] < 100){
    arr[i+1] = arr[i-1] + arr[i]
    i++
}
// console.log(arr)

for(a of arr){
    str += a + " "
}
console.log(str)