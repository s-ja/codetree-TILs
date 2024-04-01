const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, k, t] = input.shift().split(" ")
n = Number(n)
k = Number(k)

const arr = []

for(elem of input){
   arr.push(elem.replace('\b', ' '))
}
arr.sort()

const result = []

for(elem of arr){
    if(elem.includes(t)){
        result.push(elem)
    }
}

// console.log(result)
console.log(result[k - 1])