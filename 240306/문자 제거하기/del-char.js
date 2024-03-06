const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const str = input.shift().split("");

const arr = input.map(Number)

// console.log(str, arr)

for(let i = 0; i < arr.length; i++){
    if(arr[i] >= str.length){
        str.pop()
    }
    str.splice(arr[i],1)
    console.log(str.join(""))
    if(str.length === 1){
        break
    }
}