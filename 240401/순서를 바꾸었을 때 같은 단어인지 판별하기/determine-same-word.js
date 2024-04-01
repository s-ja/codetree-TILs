const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr1 = input[0].trim().split("")
const arr2 = input[1].trim().split("")

arr1.sort()
arr2.sort()

let length = 0
if(arr1.length > arr2.length){
    length = arr1.length
}else{
    length = arr2.length
}

let result = "Yes"

for(let i = 0; i < length; i++){
    if(arr1[i] !== arr2[i]){
        result = "No"
    }
}

console.log(result)