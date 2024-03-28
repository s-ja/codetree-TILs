const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input

console.log(print(a, b));

function print(a, b){
    let cnt = 0;
    for(let i = a; i <= b; i++){
        if(i % 2 !== 0){
            if(i % 10 !== 5){
                if(!threeNine(i)){
                    // console.log(i)
                    cnt++
                }
            }
        }
    }
    return cnt;
}

function threeNine(n){
    if(n % 3 === 0 && n % 9 !== 0){
        return true
    }else{
        return false
    }
}