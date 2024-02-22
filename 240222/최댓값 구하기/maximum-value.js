const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])
const arr = [a,b,c]
// console.log(Math.max(a,b,c))

let result = null
for(let i=0; i<arr.length; i++){
    if(!result){
        result = arr[i]
    }
    if(arr[i+1]===undefined){
        break
    }
    if(result < arr[i+1]){
        result = arr[i+1]
    }
}

console.log(result)