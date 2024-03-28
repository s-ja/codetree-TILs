const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input.map(Number);

let cnt = 0;

for(let i = a; i <= b; i++){
    if(isPrime(i)){
        if(isDouble(i)){
            cnt++
        }
    }
}

console.log(cnt)

function isPrime(n){
    let prime = true
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            prime = false
        }
    }
    return prime
}

function isDouble(n){
    let arr = n.toString().split("").map(Number)
    let acc = 0
    for(elem of arr){
        acc += elem
    }
    if(acc % 2 === 0){
        return true
    }else{
        return false
    }
}