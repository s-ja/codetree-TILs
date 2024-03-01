const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = Array(10).fill(0)

let i = 0;
while(input[i] !== 0){
    if(input[i] > 9){
        // console.log(input[i].toString()[0])
        arr[input[i].toString()[0]]++
    }
    i++
}
// console.log(arr)

for(let i = 1; i < 10; i++){
    console.log(`${i} - ${arr[i]}`)
}