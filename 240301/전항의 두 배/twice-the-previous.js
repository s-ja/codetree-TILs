const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = [input[0], input[1]]

for(let i = 2; i < 10; i++){
    arr[i] = arr[i-1] + (arr[i-2] * 2)
}

// console.log(arr)
let str = ""
for(a of arr){
    str += a + " "
}

console.log(str)