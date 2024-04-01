const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, k, t] = input.shift().split(" ")
n = Number(n)
k = Number(k)

input.sort()

const result = []

for(elem of input){
    if(elem.includes(t)){
        result.push(elem)
    }
}

console.log(result[k - 1])