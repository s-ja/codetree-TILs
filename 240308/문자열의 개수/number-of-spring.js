const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0
const arr = []

for(let i = 0; i < input.length; i++){
    if(input[i] === "0"){
        break
    }else if(i % 2 === 0){
        cnt++
        arr.push(input[i])
    }else{
        cnt++
    }
}

console.log(cnt)

for(elem of arr){
    console.log(elem)
}