const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const [a, b] = input.split(" ").map(Number)

let result = 0;

for(let i = a; i <= b; i++){
    if(isPrime(i)){
        result += i
    }
}

function isPrime(n){
    if(n === 1){
        return false
    }

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

console.log(result)