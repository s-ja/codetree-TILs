const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const str = input.shift().split("");

const arr = input.map(Number)

// console.log(str, arr)

for(let i = 0; i < arr.length; i++){
    str.splice(arr[i],1)
    if(arr[i] >= str.length){
        str.pop()
    }
    console.log(str.join(""))
}