const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, k, t] = input.shift().split(" ")
n = Number(n)
k = Number(k)

input.sort()
const check = t.split("")

const result = []

for(elem of input){
    const str = elem.split("")
    let yes = true
    for(let i = 0; i < check.length; i++){
        if(str[i] !== check[i]){
            yes = false
        }
    }
    if(yes){
        result.push(elem)
    }else{
        continue
    }
}

// console.log(result)
console.log(result[k - 1])