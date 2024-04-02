const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [m1, d1, m2, d2] = input

let elapsed1 = 0
let elapsed2 = 0

const thirtyone = [1, 3, 5, 7, 8, 10, 12]

for(let i = 1; i < m2; i++){
    if(i === 2){
        elapsed1 += 28
    }else if(thirtyone.includes(i)){
        elapsed1 += 31
    }else{
        elapsed1 += 30
    }
}

elapsed1 += d2

for(let i = 1; i < m1; i++){
    if(i === 2){
        elapsed2 += 28
    }else if(thirtyone.includes(i)){
        elapsed2 += 31
    }else{
        elapsed2 += 30
    }
}

elapsed2 += d1

// console.log(elapsed1)
// console.log(elapsed2)
console.log(elapsed1 - elapsed2 + 1)